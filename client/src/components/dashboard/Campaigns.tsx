import type { CampaignsProps } from "../../types";
import CampaignCard from "./CampaignCard";

const Campaigns = ({ campaigns }: CampaignsProps) => {
    return (
        <div className="w-full grid grid-cols-2 gap-6 mt-8">
            {campaigns.map((campaign) => (
                <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    otherBg={Number(campaign.id) % 2 == 0 ? "dao-pattern" : ""}
                />
            ))}
        </div>
    );
};

export default Campaigns;
