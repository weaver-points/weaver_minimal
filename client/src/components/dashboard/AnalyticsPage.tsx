import { useState } from "react";
import daoGuyImg from "../../assets/dao-guy.png";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { day: "Sun", users: 200 },
    { day: "Mon", users: 500 },
    { day: "Tue", users: 900 },
    { day: "Wed", users: 1000 },
    { day: "Thu", users: 600 },
    { day: "Fri", users: 700 },
    { day: "Sat", users: 300 },
];

const AnalyticsPage = () => {
    const [period, setPeriod] = useState("Weekly");

    return (
        <div className="bg-black min-h-screen text-white px-6 py-8">
            {/* Tabs */}

            {/* Banner */}
            <div className="rounded-xl overflow-hidden mb-8 w-full">
                <div className="relative w-full h-32 md:h-40">
                    <img
                        src={daoGuyImg}
                        alt="DAO Voter"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
                        DAO Voter
                    </div>
                </div>
            </div>

            {/* Participants Section */}
            <div className="w-full mx-auto">
                <h2 className="text-xl font-semibold mb-4">Participants</h2>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-8">
                    {/* Stats */}
                    <div className="flex gap-12 md:gap-16">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-lime-200 text-lg font-bold">
                                    543
                                </span>
                                <span className="text-zinc-400">Active</span>
                            </div>
                            <div className="text-zinc-400 text-sm">
                                May 20 - May 31
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-zinc-400 text-lg font-bold">
                                    378
                                </span>
                                <span className="text-zinc-400">Inactive</span>
                            </div>
                        </div>
                    </div>
                    {/* Dropdown */}
                    <div>
                        <select
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white focus:outline-none"
                        >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select>
                    </div>
                </div>
                {/* Chart */}
                <div className="bg-zinc-900 rounded-xl p-6">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid stroke="#222" vertical={false} />
                            <XAxis
                                dataKey="day"
                                stroke="#888"
                                tick={{ fill: "#888", fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                stroke="#888"
                                tick={{ fill: "#888", fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                                domain={[0, 1000]}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: "#222",
                                    border: "none",
                                    borderRadius: 8,
                                    color: "#fff",
                                }}
                                labelStyle={{ color: "#fff", fontWeight: 500 }}
                                formatter={(value: number) => [value, "Users"]}
                            />
                            <Line
                                type="monotone"
                                dataKey="users"
                                stroke="#C6FF7F"
                                strokeWidth={3}
                                dot={{
                                    r: 4,
                                    fill: "#C6FF7F",
                                    stroke: "#222",
                                    strokeWidth: 2,
                                }}
                                activeDot={{
                                    r: 6,
                                    fill: "#222",
                                    stroke: "#C6FF7F",
                                    strokeWidth: 3,
                                }}
                                isAnimationActive={true}
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                // Add a glow effect
                                style={{
                                    filter: "drop-shadow(0 0 8px #C6FF7F)",
                                }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
