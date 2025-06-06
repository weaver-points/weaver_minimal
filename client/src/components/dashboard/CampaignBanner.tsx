import type { CampaignBannerProps } from "../../types";
import shareIcon from "../../assets/svg/share-icon.svg";
import telegram from "../../assets/svg/telegram.svg";
import twitter from "../../assets/svg/twitter.svg";

const CampaignBanner = ({
    otherBg,
    title,
    icon,
    owner,
    shareLink,
    telegramLink,
    xLink,
}: CampaignBannerProps) => {
    return (
        <div
            className={
                !otherBg
                    ? `h-32 nft-pattern bg-cover bg-center bg-no-repeat rounded border border-[#988C8C]`
                    : `h-32 bg-cover bg-center bg-no-repeat rounded border border-[#988C8C] ${otherBg}`
            }
        >
            <div className="bg-black/50 h-full px-12 py-10 flex justify-between items-center">
                <div>
                    <h1 className="text-[34px] font-bold">{title}</h1>
                    <p className="text-[16px] text-[#B2A9A9]">
                        Curated by <img src={icon} alt="" className="inline" />{" "}
                        {owner}
                    </p>
                </div>
                <div>
                    <p>Share : </p>
                    <div className="flex space-x-4">
                        <a
                            href={shareLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={shareIcon}
                                alt="share"
                                className="w-6 h-6"
                            />
                        </a>
                        <a
                            href={telegramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={telegram}
                                alt="telegram"
                                className="w-6 h-6"
                            />
                        </a>
                        <a
                            href={xLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={twitter} alt="X" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignBanner;
