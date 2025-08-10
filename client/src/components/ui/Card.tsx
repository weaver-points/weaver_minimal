import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    onClick,
    hover = false,
}) => {
    const baseClasses = 'bg-dark-100 border border-dark-300 rounded-xl overflow-hidden';
    const hoverClasses = hover ? 'card-hover cursor-pointer' : '';
    const classes = `${baseClasses} ${hoverClasses} ${className}`;
    
    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card; 