import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "hsl(219, 22, 16)",
				"dark-grayish-blue": "hsl(217, 19, 24)",
				"grayish-blue": "hsl(217, 19, 38)",
				"light-cyan": "hsl(193, 38. 86)",
				"neon-green": "hsl(150, 100, 66)",
			},
		},
	},
	plugins: [],
} satisfies Config;
