import SpiderWeb from "../assets/svg/spider-web.svg";
import RegisterUserForm from "../components/RegisterUserForm";
const RegisterUser = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex space-x-4 p-4">
                <div className="flex justify-center items-center">
                    <img src={SpiderWeb} alt="" className="block" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Register User</h1>
                    <RegisterUserForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;
