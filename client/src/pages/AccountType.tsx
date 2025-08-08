import userIconWithBG from "../assets/svg/user-icon-bg.svg";
import protocolIconWithBG from "../assets/svg/protocol-icon-bg.svg";
import AccountTypeOptions from "../components/AccountTypeOptions";

const AccountType = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="container max-w-4xl mx-auto">
                <div className="bg-dark-100 rounded-xl p-6 md:p-8 lg:p-12 animate-fade-in">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
                        Select your account type
                    </h1>
                    <div className="space-y-4 md:space-y-6">
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
        </div>
    );
};

export default AccountType;
