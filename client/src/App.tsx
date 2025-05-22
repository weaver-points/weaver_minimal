import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeaverPage from "./pages/WeaverPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WeaverPage />} />
                {/* <Route path="/signup" element={<Signup />} />
                <Route path="/connect" element={<ConnectWallet />} />
                <Route path="/howitworks" element={<HowItWorks />} />
                <Route path="/getdigester" element={<GetDigester />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="marketplace" element={<Marketplace />} />
                    <Route path="energy-asset" element={<EnergyAsset />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="rewards" element={<Rewards />} />
                    <Route path="gas" element={<Gas />} />
                </Route> */}
            </Routes>
        </Router>
    );
}

export default App;
