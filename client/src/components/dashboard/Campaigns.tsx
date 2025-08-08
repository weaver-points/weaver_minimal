import type { CampaignsProps } from "../../types";
import CampaignCard from "./CampaignCard";

const Campaigns: React.FC<CampaignsProps> = ({ campaigns }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in">
            {campaigns.map((campaign, index) => (
                <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    otherBg={index % 2 === 0 ? "dao-pattern" : ""}
                />
            ))}
        </div>
    );
};

export default Campaigns;
