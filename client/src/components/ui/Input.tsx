import React from 'react';
import type { InputProps } from '../../types';

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    error,
    required = false,
    className = '',
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-white mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                className={`w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-dark-500 focus:border-transparent transition-colors duration-200 ${
                    error ? 'border-red-500 focus:ring-red-500' : ''
                }`}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default Input; 