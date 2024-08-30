/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                handlee: ["Handlee", "cursive"],
            },
            keyframes: {
                lateload: {
                    "0%": { width: "50%", height: "50%", opacity: 0 },
                    "100%": { width: "full", height: "100%", opacity: 1 },
                },
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "late-load-animate": "lateload 1s ease-in-out",
            },
        },
    },
    plugins: [
      require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
    ],
};
