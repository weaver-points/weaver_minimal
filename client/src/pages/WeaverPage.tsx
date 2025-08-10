import { useNavigate } from 'react-router-dom';
import SpiderLogo from "../assets/svg/spider-logo.svg";

const WeaverPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/account-type');
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 animate-fade-in">
            <div className="container max-w-md mx-auto text-center">
                <div 
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    onClick={handleClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            handleClick();
                        }
                    }}
                >
                    <img 
                        src={SpiderLogo} 
                        alt="Weaver Logo" 
                        className="w-full max-w-xs mx-auto animate-slide-up"
                    />
                    <p className="text-dark-400 mt-4 text-sm animate-fade-in">
                        Click to continue
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeaverPage;
