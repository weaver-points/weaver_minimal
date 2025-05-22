import SpiderLogo from "../assets/svg/spider-logo.svg";
const WeaverPage = () => {
    return (
        <div className="text-white min-h-screen flex items-center justify-center">
            <div className="flex flex-col">
                <img src={SpiderLogo} alt="" className="block" />
            </div>
        </div>
    );
};

export default WeaverPage;
