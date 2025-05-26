import userIconWithBG from "../assets/svg/user-icon-bg.svg";
import protocolIconWithBG from "../assets/svg/protocol-icon-bg.svg";
import AccountTypeOptions from "../components/AccountTypeOptions";

const AccountType = () => {
    return (
        <div className="min-h-screen flex items-center">
            <div className="w-[60%] mx-auto bg-[#232222] rounded-xl p-[45px]">
                <h1 className="text-white text-4xl">
                    Select your account type
                </h1>
                <div className="mt-5 flex flex-col space-y-3">
                    <AccountTypeOptions
                        image={userIconWithBG}
                        heading="User"
                        body="Join campaigns, earn rewards and view campaign progress in real time."
                        link="/register-user"
                    />
                    <AccountTypeOptions
                        image={protocolIconWithBG}
                        heading="Protocol"
                        body="Create campaigns, build loyalty, and give out rewards to users."
                        link="/register-protocol"
                    />
                </div>
            </div>
        </div>
    );
};

export default AccountType;
