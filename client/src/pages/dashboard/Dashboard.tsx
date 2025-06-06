import Campaigns from "../../components/dashboard/Campaigns";
import coitonLogo from "../../assets/coiton-logo.png";
const activeCampaigns = [
    {
        id: "1",
        title: "Early NFT Collector",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 14,
        icon: coitonLogo,
    },
    {
        id: "2",
        title: "DAO Voter",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Layer3",
        activeCount: 987,
        icon: coitonLogo,
    },
    {
        id: "3",
        title: "TestNet Explorer",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 14,
        icon: coitonLogo,
    },
    {
        id: "4",
        title: "Dao Voter",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Layer3",
        activeCount: 987,
        icon: coitonLogo,
    },
    {
        id: "5",
        title: "Early NFT Collector",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 14,
        icon: coitonLogo,
    },
    {
        id: "6",
        title: "Early NFT Collector",
        startDate: "May 20th, 5:02pm",
        endDate: "to May 31, 9:07 pm",
        owner: "Coiton",
        activeCount: 987,
        icon: coitonLogo,
    },
];
const Dashboard = () => {
    return (
        <div className="p-12 bg-black">
            <h1 className="text-[#EBFFCB] text-[40px]">Campaigns</h1>
            <h3 className="text-2xl mt-12">Trending campaigns</h3>
            <Campaigns campaigns={activeCampaigns} />
        </div>
    );
};

export default Dashboard;
