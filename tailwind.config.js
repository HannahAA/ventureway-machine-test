module.exports = {
    content: [
        "./index.html", // For Vite projects
        "./src/**/*.{js,ts,jsx,tsx}", // For all your React components
    ],
    theme: {
        extend: {
            fontFamily: {
                heebo: ["Heebo", "san-serif"],
            }
        }
    },
    plugins: [],
}