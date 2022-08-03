module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				quicksand: ["Quicksand", "cursive"],
			},
			spacing: {
				navbar: "80px",
				header: "60px",
				withmax: "1270px",
			},
			colors: {
				primary: "#776347",
				primarylight: "#a79073",
				primarydark: "#4a391f",
				secundary: "#475b77",
				analogous: "#774b47",
				analogous1: "#737747",
				triadic: "#5b7747",
				triadic1: "#477763",
				links: "#1d49d8",
				button: "#104c91",
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
