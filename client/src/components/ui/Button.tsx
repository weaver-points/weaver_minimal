import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    type = 'button',
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-hover';
    
    const variantClasses = {
        primary: 'bg-dark-500 text-white hover:bg-dark-600 focus:ring-dark-500',
        secondary: 'bg-dark-300 text-white hover:bg-dark-400 focus:ring-dark-300',
        outline: 'border border-dark-400 text-white hover:bg-dark-400 focus:ring-dark-400',
        ghost: 'text-white hover:bg-dark-300 focus:ring-dark-300',
    };
    
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button; 