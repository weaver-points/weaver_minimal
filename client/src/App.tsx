import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeaverPage from "./pages/WeaverPage";
import AccountType from "./pages/AccountType";
import RegisterUser from "./pages/RegisterUser";
import RegisterProtocol from "./pages/RegisterProtocol";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WeaverPage />} />
                <Route path="/account-type" element={<AccountType />} />
                <Route path="/register-user" element={<RegisterUser />} />
                <Route
                    path="/register-protocol"
                    element={<RegisterProtocol />}
                />

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
