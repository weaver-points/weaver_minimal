import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 lg:ml-0">
                    <div className="p-4 md:p-6 lg:p-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
