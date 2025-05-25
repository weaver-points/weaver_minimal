import { Globe, Link, Twitter, Mail, X } from "lucide-react";
import bannerImg from "../../assets/mask-group.png";
import logoImg from "../../assets/coiton-big.png";
import Home from "../../components/dashboard/Home";
import { useState } from "react";
import AnalyticsPage from "../../components/dashboard/AnalyticsPage";

const CampaignProfile = () => {
    const [activePage, setActivePage] = useState(0);
    return (
        <div className="min-h-screen bg-black text-white font-satoshi">
            {/* Top Banner */}
            <div className="relative w-full h-48 md:h-56 lg:h-64 bg-gray-900 overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full h-full object-cover object-top"
                />
                {/* Profile Logo */}
                <div className="absolute left-8 -bottom-12 md:left-16 md:-bottom-16 z-10 flex items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-black bg-black flex items-center justify-center overflow-hidden">
                        <img
                            src={logoImg}
                            alt="Coiton Logo"
                            className="w-20 h-20 md:w-28 md:h-28 object-contain"
                        />
                    </div>
                    <span className="ml-2 mt-10 bg-blue-600 rounded-full px-1.5 py-0.5 text-xs font-bold border-2 border-black">
                        ✓
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full pt-20 px-20">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold flex items-center gap-2">
                            Coiton
                        </h1>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="bg-zinc-800 text-xs px-2 py-1 rounded text-zinc-200">
                                DAO
                            </span>
                            <span className="bg-zinc-800 text-xs px-2 py-1 rounded text-zinc-200">
                                NFT
                            </span>
                            <span className="bg-zinc-800 text-xs px-2 py-1 rounded text-zinc-200">
                                NFT marketplace
                            </span>
                        </div>
                        <p className="text-zinc-300 mt-3 max-w-lg text-sm">
                            Need a marketplace for your infrastructure? This is
                            the perfect...
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-zinc-400">
                            <a href="#" className="hover:text-white">
                                <Globe size={18} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Link size={18} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Mail size={18} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <X size={18} />
                            </a>
                        </div>
                    </div>
                    {/* Action Buttons & Stats */}
                    <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                        <button className="bg-lime-200 text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-lime-300 transition">
                            + Follow
                        </button>
                        <div className="flex gap-4 mt-2">
                            <div className="bg-zinc-900 rounded-lg px-4 py-2 flex flex-col items-center min-w-[90px]">
                                <span className="text-xs text-zinc-400">
                                    Followers
                                </span>
                                <span className="font-bold text-lg">8,674</span>
                            </div>
                            <div className="bg-zinc-900 rounded-lg px-4 py-2 flex flex-col items-center min-w-[90px]">
                                <span className="text-xs text-zinc-400">
                                    Token
                                </span>
                                <span className="font-bold text-lg">
                                    TGE Upcoming
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-10 border-b border-zinc-700 flex gap-8">
                    <button
                        className={`pb-2 ${
                            activePage === 0
                                ? "border-b-2 border-lime-200 text-white font-semibold "
                                : "text-zinc-400"
                        }`}
                        onClick={() => setActivePage(0)}
                    >
                        Home
                    </button>
                    <button
                        className={`pb-2 ${
                            activePage === 1
                                ? "border-b-2 border-lime-200 text-white font-semibold "
                                : "text-zinc-400"
                        }`}
                        onClick={() => setActivePage(1)}
                    >
                        Analytics
                    </button>
                </div>
                {activePage === 0 && <Home />}
                {activePage === 1 && <AnalyticsPage />}
            </div>
        </div>
    );
};

export default CampaignProfile;
