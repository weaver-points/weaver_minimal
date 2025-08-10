import { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarIcon from "../assets/svg/navbar-icon.svg";
import navLine from "../assets/svg/nav-line.svg";
import memoji from "../assets/svg/memoji.svg";
import { ChevronDown, Menu, X } from "lucide-react";
import type { NavbarProps } from '../types';

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const defaultUser = {
        id: '1',
        name: 'Luciferess',
        address: '0x742d...f44e',
        type: 'user' as const,
    };

    const currentUser = user || defaultUser;

    return (
        <nav className="bg-dark-100 border-b border-dark-300 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/dashboard" className="flex-shrink-0">
                        <img 
                            src={navbarIcon} 
                            alt="Weaver Logo" 
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <img src={navLine} alt="" className="h-6 w-auto" />
                            <div className="text-sm">
                                <p className="text-white font-medium">{currentUser.name}</p>
                                <p className="text-dark-400 text-xs">{currentUser.address}</p>
                            </div>
                            <button 
                                className="text-dark-400 hover:text-white transition-colors"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>
                        <img src={memoji} alt="User Avatar" className="h-8 w-8 rounded-full" />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white hover:text-dark-400 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-dark-300">
                        <div className="flex items-center space-x-3 pt-4">
                            <img src={navLine} alt="" className="h-6 w-auto" />
                            <div className="text-sm">
                                <p className="text-white font-medium">{currentUser.name}</p>
                                <p className="text-dark-400 text-xs">{currentUser.address}</p>
                            </div>
                            <img src={memoji} alt="User Avatar" className="h-8 w-8 rounded-full" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
