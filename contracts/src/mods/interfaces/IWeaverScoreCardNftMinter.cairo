use starknet::ContractAddress;
// *************************************************************************
//                              INTERFACE of WEAVER SCORE CARD NFT MINTER
// *************************************************************************
#[starknet::interface]
pub trait IWeaverScoreCardNFTMinter<TState> {
    fn mint_weaver_score_card_nft(ref self: TContractState);
    fn get_asset_price(self: @TContractState, asset_id: felt252) -> u128;
    fn set_erc721(ref self: TContractState, address: ContractAddress);
    fn withdraw(ref self: TContractState, amount: u256);
    fn get_owner(self: @TContractState) -> ContractAddress;
    fn get_weaver_nft_address(self: @TContractState) -> ContractAddress;
    fn get_pragma_address(self: @TContractState) -> ContractAddress;
}
