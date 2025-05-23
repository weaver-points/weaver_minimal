export interface AccountTypeOptionsProps {
    image: string;
    heading: string;
    body: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
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
