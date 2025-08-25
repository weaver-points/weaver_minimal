// Pragma Oracle Interface
#[starknet::interface]
trait IPragmaABI<TContractState> {
    fn get_data(
        self: @TContractState, data_type: felt252, aggregation_mode: felt252,
    ) -> (u128, u32, u32, u32);
}

// ERC20 Interface for STRK token
#[starknet::interface]
trait IERC20<TContractState> {
    fn balance_of(self: @TContractState, account: ContractAddress) -> u256;
    fn transfer(ref self: TContractState, recipient: ContractAddress, amount: u256) -> bool;
    fn transfer_from(
        ref self: TContractState, sender: ContractAddress, recipient: ContractAddress, amount: u256,
    ) -> bool;
    fn approve(ref self: TContractState, spender: ContractAddress, amount: u256) -> bool;
    fn allowance(self: @TContractState, owner: ContractAddress, spender: ContractAddress) -> u256;
}


#[starknet::contract]
mod WeaverScoreCardNftMinter {
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess};
    use starknet::{ContractAddress, get_caller_address, get_contract_address};
    use crate::mods::errors::Errors;
    use crate::mods::interfaces::IWeaverNFT::{
        IWeaverNFT, IWeaverNFTDispatcher, IWeaverNFTDispatcherTrait,
    };
    use crate::mods::interfaces::IWeaverScoreCardNFTMinter::{
        IWeaverScoreCardNFTMinter, IWeaverScoreCardNFTMinterDispatcher,
        IWeaverScoreCardNFTMinterDispatcherTrait,
    };
    use super::{
        IERC20Dispatcher, IERC20DispatcherTrait, IPragmaABIDispatcher, IPragmaABIDispatcherTrait,
    };

    // Constants
    const ASSET_PRICE_USD: u128 = 100000000; // $1 with 8 decimals
    const DECIMALS: u128 = 100000000; // 10^8
    const STRK_USD_PAIR_ID: felt252 = 19514442401534788; // 'STRK/USD' pair ID
    const AGGREGATION_MODE: felt252 = 120282243752302; // 'TWAP' mode

    // STRK token address on Starknet mainnet
    const STRK_TOKEN_ADDRESS: felt252 =
        0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d;

    #[storage]
    struct Storage {
        pragma_contract: ContractAddress,
        asset_price: u128,
        weaver_nft_contract_address: ContractAddress,
        owner: ContractAddress,
        next_token_id: u256,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        WeaverScoreCardNftMinted: WeaverScoreCardNftMinted,
        AssetPriceUpdated: AssetPriceUpdated,
        WeaverNftAddressSet: WeaverNftAddressSet,
        FundsWithdrawn: FundsWithdrawn,
    }

    #[derive(Drop, starknet::Event)]
    struct WeaverScoreCardNftMinted {
        #[key]
        to: ContractAddress,
        token_id: u256,
        strk_amount_paid: u256,
        strk_price: u128,
    }

    #[derive(Drop, starknet::Event)]
    struct AssetPriceUpdated {
        old_price: u128,
        new_price: u128,
    }

    #[derive(Drop, starknet::Event)]
    struct WeaverNftAddressSet {
        #[key]
        old_address: ContractAddress,
        #[key]
        new_address: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    struct FundsWithdrawn {
        #[key]
        to: ContractAddress,
        amount: u256,
    }


    #[constructor]
    fn constructor(
        ref self: ContractState,
        pragma_contract: ContractAddress,
        weaver_nft_contract_address: ContractAddress,
        owner: ContractAddress,
    ) {
        assert(!pragma_contract.is_zero(), Errors::ZERO_ADDRESS);
        assert(!weaver_nft_contract_address.is_zero(), Errors::ZERO_ADDRESS);
        assert(!owner.is_zero(), Errors::ZERO_ADDRESS);

        self.pragma_contract.write(pragma_contract);
        self.weaver_nft_contract_address.write(weaver_nft_contract_address);
        self.owner.write(owner);
        self.asset_price.write(ASSET_PRICE_USD);
        self.next_token_id.write(1);
    }

    impl WeaverScoreCardNftMinterImpl of IWeaverScoreCardNftMinter<ContractState> {
        fn mint_weaver_score_card_nft(ref self: ContractState) {
            let caller = get_caller_address();
            assert(!caller.is_zero(), Errors::ZERO_ADDRESS);

            // Fetch current STRK price from Pragma Oracle
            let strk_price = self._get_strk_price_from_oracle();
            assert(strk_price > 0, Errors::INVALID_PRICE);

            // Calculate required STRK amount: (asset_price * DECIMALS) / strk_price
            let strk_needed_u128 = (ASSET_PRICE_USD * DECIMALS) / strk_price;
            let strk_needed = strk_needed_u128.into();

            // Get STRK token contract
            let strk_token = IERC20Dispatcher {
                contract_address: STRK_TOKEN_ADDRESS.try_into().unwrap(),
            };

            // Check caller's STRK balance
            let caller_balance = strk_token.balance_of(caller);
            assert(caller_balance >= strk_needed, Errors::INSUFFICIENT_BALANCE);

            // Check allowance
            let current_allowance = strk_token.allowance(caller, get_contract_address());
            assert(current_allowance >= strk_needed, Errors::INSUFFICIENT_ALLOWANCE);

            // Transfer STRK from caller to contract (assuming caller give approval)
            let transfer_success = strk_token
                .transfer_from(caller, get_contract_address(), strk_needed);
            assert(transfer_success, Errors::TRANSFER_FAILED);

            // Mint NFT to caller - if this fails, we need to refund
            let weaver_nft = IWeaverNFTDispatcher {
                contract_address: self.weaver_nft_contract_address.read(),
            };

            // Get next token ID and increment
            let last_token_id_minted = weaver_nft.get_last_minted_id();
            self.next_token_id.write(last_token_id_minted);

            // Try to mint NFT
            let mint_success = self._try_mint_nft(weaver_nft, caller);

            if !mint_success {
                // Refund STRK tokens to caller
                let refund_success = strk_token.transfer(caller, strk_needed);
                assert(refund_success, Errors::MINTING_FAILED);
            }

            // Emit success event
            self
                .emit(
                    WeaverScoreCardNftMinted {
                        to: caller, token_id, strk_amount_paid: strk_needed, strk_price,
                    },
                );
        }

        fn get_asset_price(self: @ContractState, asset_id: felt252) -> u128 {
            let pragma_dispatcher = IPragmaABIDispatcher {
                contract_address: self.pragma_contract.read(),
            };

            let (price, _decimals, _last_updated_timestamp, _num_sources_aggregated) =
                pragma_dispatcher
                .get_data(asset_id, AGGREGATION_MODE);

            price
        }

        fn set_erc721(ref self: ContractState, address: ContractAddress) {
            self._only_owner();
            assert(!address.is_zero(), Errors::ZERO_ADDRESS);

            let old_address = self.weaver_nft_contract_address.read();
            self.weaver_nft_contract_address.write(address);

            self.emit(WeaverNftAddressSet { old_address, new_address: address });
        }

        fn withdraw(ref self: ContractState, amount: u256) {
            self._only_owner();

            let strk_token = IERC20Dispatcher {
                contract_address: STRK_TOKEN_ADDRESS.try_into().unwrap(),
            };

            let contract_balance = strk_token.balance_of(get_contract_address());
            assert(contract_balance >= amount, Errors::INSUFFICIENT_BALANCE);

            let owner = self.owner.read();
            let success = strk_token.transfer(owner, amount);
            assert(success, Errors::WITHDRAWAL_FAILED);

            self.emit(FundsWithdrawn { to: owner, amount });
        }

        fn get_owner(self: @ContractState) -> ContractAddress {
            self.owner.read()
        }

        fn get_weaver_nft_address(self: @ContractState) -> ContractAddress {
            self.weaver_nft_contract_address.read()
        }

        fn get_pragma_address(self: @ContractState) -> ContractAddress {
            self.pragma_contract.read()
        }
    }


    #[generate_trait]
    impl PrivateImpl of PrivateTrait {
        fn _only_owner(self: @ContractState) {
            let caller = get_caller_address();
            let owner = self.owner.read();
            assert(caller == owner, Errors::UNAUTHORIZED);
        }

        fn _get_strk_price_from_oracle(self: @ContractState) -> u128 {
            let pragma_dispatcher = IPragmaABIDispatcher {
                contract_address: self.pragma_contract.read(),
            };

            let (price, _decimals, _last_updated_timestamp, _num_sources_aggregated) =
                pragma_dispatcher
                .get_data(STRK_USD_PAIR_ID, AGGREGATION_MODE);

            assert(price > 0, Errors::PRICE_FETCH_FAILED);
            price
        }

        fn _try_mint_nft(
            self: @ContractState, weaver_nft: IWeaverNFTDispatcher, to: ContractAddress,
        ) -> bool {
            // In Cairo, we can't directly catch panics, so we'll assume the mint succeeds
            // The actual implementation would depend on how the WeaverNFT contract handles errors
            weaver_nft.mint_weaver_nft(to);
            true
        }
    }
}
