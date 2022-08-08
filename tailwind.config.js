const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			fontFamily: {},
			fontFamily: {
				sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
				quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				navbar: "80px",
				header: "64px",
				withmax: "1270px",
				mobile: "360px",
			},
			colors: {
				primary: "#776347",
				primarylight: "#a79073",
				primarydark: "#4a391f",
				secundary: "#475b77",
				analogous: "#009588",
				analogous1: "#737747",
				triadic: "#5b7747",
				triadic1: "#477763",
				links: "#1d49d8",
				button: "#104c91",
				logo: "#834626",
			},
			backgroundSize: {
				auto: "100%",
				cover: "cover",
				contain: "150%",
			},
		},
		plugins: [require("flowbite/plugin")],
	},
};
