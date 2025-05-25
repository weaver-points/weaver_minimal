import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex">
                <Sidebar />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
