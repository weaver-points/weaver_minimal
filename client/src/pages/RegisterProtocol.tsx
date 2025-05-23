import SpiderWeb from "../assets/svg/spider-web.svg";
import RegisterProtocolForm from "../components/RegisterProtocolForm";
const RegisterProtocol = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex space-x-4 p-4">
                <div className="flex justify-center items-center">
                    <img src={SpiderWeb} alt="" className="block" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Register Protocol</h1>
                    <RegisterProtocolForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterProtocol;
