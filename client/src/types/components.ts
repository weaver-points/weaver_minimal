export interface AccountTypeOptionsProps {
    image: string;
    heading: string;
    body: string;
    alt?: string;
    className?: string;
    onClick?: () => void;

    link: string; // New property for the link
}

export interface InputBoxProps {
    label: string;
    inputType: string;
    placeholder?: string;
    classStyle?: string;
    size?: number;
}

export interface IconBoxProps {
    icon: string;
    text: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
}

export interface Campaign {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    owner: string;
    activeCount: number;
    icon: string;
}

export interface CampaignsProps {
    campaigns: Campaign[];
}

export interface CampaignCardProps {
    campaign: Campaign;
    onClick?: () => void;
    otherBg?: string;
}

export interface CampaignBannerProps {
    otherBg?: string;
    title: string;
    icon: string;
    owner: string;
    shareLink: string;
    telegramLink: string;
    xLink: string;
}

export interface JoinBannerProps {
    date: string;
}
