/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Nếu bạn dùng Next.js App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
