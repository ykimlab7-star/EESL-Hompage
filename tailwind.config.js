/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'eesl-blue': '#0033cc', // Custom deep blue
            }
        },
    },
    plugins: [],
}
