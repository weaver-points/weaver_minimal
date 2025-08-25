pub mod errors;
pub mod events;
pub mod types;

pub mod token {
    pub mod WeaverNFT;
}

pub mod interfaces {
    pub mod ICustomNFT;
    pub mod IERC721;
    pub mod IWeaver;
    pub mod IWeaverNFT;
    pub mod IWeaverScoreCardNFTMinter;
    pub mod Iprotocol;
}

pub mod weaver_contract {
    pub mod weaver;
}

pub mod protocol {
    pub mod protocolNFT;
    pub mod protocolcomponent;
    pub mod protocols;
}

pub mod Utils {
    pub mod Convert_felt_to_bytearray;
}

