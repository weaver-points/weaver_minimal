import { useNavigate } from "react-router-dom";
import { Dot, User } from "lucide-react";
import type { CampaignCardProps } from "../../types";

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, otherBg }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard/campaign-details");
    };

    return (
        <div
            className="w-full border border-dark-300 rounded-xl overflow-hidden bg-dark-100 hover:bg-dark-200 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer animate-slide-up"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleClick();
                }
            }}
        >
            <div
                className={`
                    h-48 md:h-56 bg-cover bg-center bg-no-repeat rounded-t-xl relative
                    ${!otherBg ? "nft-pattern" : otherBg}
                `}
            >
                <div className="absolute inset-0 bg-black/50 p-4">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex justify-end">
                            <span className="rounded-full bg-dark-300 border border-dark-400 inline-flex items-center px-3 py-1.5">
                                <User className="h-4 w-4 mr-2 text-dark-400" />
                                <span className="text-sm text-white font-medium">
                                    {campaign.activeCount.toLocaleString()}
                                </span>
                            </span>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <span className="rounded-full bg-dark-300 border border-dark-400 inline-flex items-center px-3 py-1.5">
                                    <img
                                        src={campaign.icon}
                                        alt={`${campaign.owner} icon`}
                                        className="w-4 h-4 mr-2 rounded-full"
                                    />
                                    <span className="text-sm text-white font-medium">
                                        {campaign.owner}
                                    </span>
                                </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                {campaign.title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-6 bg-dark-200 flex justify-between items-center">
                <div className="space-y-1">
                    <p className="text-white text-sm font-medium">
                        {campaign.startDate}
                    </p>
                    <p className="text-dark-400 text-xs">{campaign.endDate}</p>
                </div>
                <div>
                    <span className="rounded-full bg-white border border-dark-500 inline-flex items-center px-3 py-1.5">
                        <Dot className="h-4 w-4 text-dark-500 mr-1" />
                        <span className="text-sm text-dark-500 font-medium">
                            Live
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
