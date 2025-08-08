import { Link } from "react-router-dom";
import type { AccountTypeOptionsProps } from "../types";

const AccountTypeOptions = ({
    image,
    heading,
    body,
    link,
}: AccountTypeOptionsProps) => {
    return (
        <Link
            to={link}
            className="block w-full border border-dark-300 rounded-xl overflow-hidden bg-dark-200 hover:bg-dark-300 transition-all duration-300 transform hover:scale-[1.02] animate-slide-up"
        >
            <div className="flex flex-col md:flex-row items-center p-6 md:p-8">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img
                        src={image}
                        alt={`${heading} icon`}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                        {heading}
                    </h2>
                    <p className="text-dark-400 text-sm md:text-base lg:text-lg leading-relaxed">
                        {body}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default AccountTypeOptions;
