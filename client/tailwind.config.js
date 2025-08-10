/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    900: '#0c4a6e',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
                dark: {
                    100: '#232222',
                    200: '#1E1E1E',
                    300: '#444444',
                    400: '#988C8C',
                    500: '#8BB151',
                    600: '#EBFFCB',
                }
            },
            fontFamily: {
                'satoshi': ['Satoshi', 'system-ui', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            backgroundImage: {
                "nft-pattern": "url('@/assets/nft-guy.png')",
                "dao-pattern": "url('@/assets/dao-guy.png')",
                "footer-texture": "url('/img/footer-texture.png')",
                "hero-gradient": "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            },
            screens: {
                'xs': '475px',
                '3xl': '1600px',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
