// Campaign related types
export interface Campaign {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    owner: string;
    activeCount: number;
    icon: string;
    description?: string;
    status?: "active" | "inactive" | "completed";
    category?: string;
    rewards?: Reward[];
}

export interface Reward {
    id: string;
    name: string;
    description: string;
    value: number;
    type: "token" | "nft" | "badge";
}

// Component prop types
export interface AccountTypeOptionsProps {
    image: string;
    heading: string;
    body: string;
    link: string;
}

export interface CampaignsProps {
    campaigns: Campaign[];
}

export interface CampaignCardProps {
    campaign: Campaign;
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

export interface IconBoxProps {
    icon: string;
    text: string;
}

export interface InputBoxProps {
    label: string;
    inputType: string;
    placeholder: string;
    classStyle?: string;
    size?: number;
}

export interface NavbarProps {
    user?: User;
}

export interface SidebarProps {
    currentPath?: string;
}

// User related types
export interface User {
    id: string;
    name: string;
    address: string;
    avatar?: string;
    type: "user" | "protocol";
}

// Form related types
export interface RegisterUserFormData {
    name: string;
    email: string;
    walletAddress: string;
}

export interface RegisterProtocolFormData {
    name: string;
    description: string;
    website: string;
    walletAddress: string;
}

// Dashboard related types
export interface DashboardStats {
    totalCampaigns: number;
    activeCampaigns: number;
    totalUsers: number;
    totalRewards: number;
}

export interface AnalyticsData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor?: string;
        borderColor?: string;
    }[];
}

// UI Component types
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "email" | "password" | "number";
    error?: string;
    required?: boolean;
    className?: string;
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hover?: boolean;
}

// Navigation types
export interface NavigationItem {
    label: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
    active?: boolean;
}

// Theme types
export interface Theme {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
        textSecondary: string;
    };
}
