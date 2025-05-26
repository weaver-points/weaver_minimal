import type { AccountTypeOptionsProps } from "../types";

const AccountTypeOptions = ({
    image,
    heading,
    body,
    link, // New prop for the link
}: AccountTypeOptionsProps) => {
    return (
        <a
            href={link}
            className="w-full flex border rounded-xl"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={image} alt="" className="block" />
            <div className="px-12 py-6 ">
                <h1 className="text-[32px]">{heading}</h1>
                <p className="text-2xl font-light">{body}</p>
            </div>
        </a>
    );
};

export default AccountTypeOptions;
