import daoGuyImg from "../../assets/dao-guy.png";

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[1, 2].map((card) => (
                <div
                    key={card}
                    className="bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden relative"
                >
                    <img
                        src={daoGuyImg}
                        alt="DAO Voter"
                        className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-zinc-800 text-xs px-2 py-1 rounded flex items-center gap-1">
                        <span className="text-lime-200">●</span> Layer3
                    </div>
                    <div className="absolute top-4 right-4 bg-zinc-800 text-xs px-2 py-1 rounded flex items-center gap-1">
                        <span className="inline-block">
                            <svg
                                width="16"
                                height="16"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-users"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </span>{" "}
                        987
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">DAO Voter</h3>
                        <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                            <span>May 20th, 5:02pm</span>
                            <span>to May 31, 9:07 pm</span>
                        </div>
                        <div className="flex justify-end mt-2">
                            <span className="bg-lime-200 text-black text-xs px-3 py-1 rounded-full font-semibold">
                                Live
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
