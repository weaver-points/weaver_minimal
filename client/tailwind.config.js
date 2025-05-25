/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "nft-pattern": "url('@/assets/nft-guy.png')",
                "footer-texture": "url('/img/footer-texture.png')",
                "hero-gradient":
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            },
        },
    },
    plugins: [],
};
