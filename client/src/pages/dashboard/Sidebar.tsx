import { Link, useLocation } from "react-router-dom";
import { ChartNoAxesCombined, House, Network, X } from "lucide-react";
import { useState } from "react";
import type { SidebarProps } from "../../types";

const Sidebar: React.FC<SidebarProps> = () => {
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navigationItems = [
        {
            label: "Home",
            path: "/dashboard",
            icon: House,
        },
        {
            label: "Campaigns",
            path: "/dashboard/campaign-details",
            icon: Network,
        },
        {
            label: "Analytics",
            path: "/dashboard/campaign-profile",
            icon: ChartNoAxesCombined,
        },
    ];

    const isActive = (path: string) => {
        return (
            location.pathname === path ||
            (path !== "/dashboard" && location.pathname.startsWith(path))
        );
    };

    return (
        <>
            {/* Mobile overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dark-100 border-r border-dark-300 transform transition-transform duration-300 ease-in-out
                ${
                    isMobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                }
            `}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile header */}
                    <div className="flex items-center justify-between p-4 border-b border-dark-300 lg:hidden">
                        <h2 className="text-white font-semibold">Menu</h2>
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="text-dark-400 hover:text-white transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation items */}
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.path);

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                                        ${
                                            active
                                                ? "bg-dark-500 text-white"
                                                : "text-dark-400 hover:bg-dark-200 hover:text-white"
                                        }
                                    `}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    <Icon
                                        className={`h-5 w-5 ${
                                            active
                                                ? "text-white"
                                                : "text-dark-400 group-hover:text-white"
                                        }`}
                                    />
                                    <span className="font-medium">
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Mobile menu button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-30 bg-dark-100 p-2 rounded-lg border border-dark-300"
                onClick={() => setIsMobileOpen(true)}
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </>
    );
};

export default Sidebar;
