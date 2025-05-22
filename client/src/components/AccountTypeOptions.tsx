import type { AccountTypeOptionsProps } from "../types";

const AccountTypeOptions = ({
    image,
    heading,
    body,
}: AccountTypeOptionsProps) => {
    return (
        <div className="w-full flex border rounded-xl">
            <img src={image} alt="" className="block" />
            <div className="px-12 py-6 ">
                <h1 className="text-[32px]">{heading}</h1>
                <p className="text-2xl font-light">{body}</p>
            </div>
        </div>
    );
};

export default AccountTypeOptions;
