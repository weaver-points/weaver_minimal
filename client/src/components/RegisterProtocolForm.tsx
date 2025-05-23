import InputBox from "./ui/InputBox";
import line from "../assets/svg/line.svg";
import discord from "../assets/svg/discord.svg";

import twitter from "../assets/svg/twitter.svg";
import github from "../assets/svg/github.svg";
import IconBox from "./ui/IconBox";
const RegisterProtocolForm = () => {
    return (
        <div className="flex flex-col space-y-8 pl-4 pt-8">
            <InputBox label="Protocol Name" inputType="text" />
            <InputBox label="Protocol Overview" inputType="text" />
            <div className="flex space-x-2">
                <img src={line} alt="line" />
                <p>OR</p>
                <img src={line} alt="line" />
            </div>
            <div>
                <p>Link Socials</p>
                <div className="flex space-x-4">
                    <IconBox icon={discord} text="Discord" />
                    <IconBox icon={twitter} text="X" />
                    <IconBox icon={github} text="Github" />
                </div>
            </div>
            <button className="block mx-auto w-[80%] bg-[#E0FFB0] text-black py-4 rounded-lg">
                Register
            </button>
        </div>
    );
};

export default RegisterProtocolForm;
