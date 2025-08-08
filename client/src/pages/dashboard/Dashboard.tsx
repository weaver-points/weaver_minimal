import Campaigns from "../../components/dashboard/Campaigns";
import coitonLogo from "../../assets/coiton-logo.png";
import type { Campaign } from "../../types";

const activeCampaigns: Campaign[] = [
    {
        id: "1",
        title: "Early NFT Collector",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 14,
        icon: coitonLogo,
        status: "active",
        category: "NFT",
    },
    {
        id: "2",
        title: "DAO Voter",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Layer3",
        activeCount: 987,
        icon: coitonLogo,
        status: "active",
        category: "DAO",
    },
    {
        id: "3",
        title: "TestNet Explorer",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 14,
        icon: coitonLogo,
        status: "active",
        category: "Testing",
    },
    {
        id: "4",
        title: "Dao Voter",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Layer3",
        activeCount: 987,
        icon: coitonLogo,
        status: "active",
        category: "DAO",
    },
    {
        id: "5",
        title: "Early NFT Collector",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 14,
        icon: coitonLogo,
        status: "active",
        category: "NFT",
    },
    {
        id: "6",
        title: "Early NFT Collector",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 987,
        icon: coitonLogo,
        status: "active",
        category: "NFT",
    },
];

const Dashboard = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
                <h1 className="text-dark-600 text-3xl md:text-4xl lg:text-5xl font-bold">
                    Campaigns
                </h1>
                <p className="text-dark-400 text-lg">
                    Discover and join exciting campaigns to earn rewards
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-xl md:text-2xl font-semibold">
                        Trending campaigns
                    </h2>
                    <button className="text-dark-500 hover:text-dark-600 transition-colors text-sm font-medium">
                        View all
                    </button>
                </div>
                <Campaigns campaigns={activeCampaigns} />
            </div>
        </div>
    );
};

export default Dashboard;
