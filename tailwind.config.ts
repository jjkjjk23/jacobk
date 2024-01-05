import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'back': 'url(/GreenBackground.svg)',
        'server': 'url(/ServerCode.png)',
      },
      colors: {
        'rocky': 'rgb(62, 59, 56)',
        'darkerRock': 'rgb(41, 39, 37)',
        'waterfall': 'rgb(206, 216, 226)',
        'darkGreen': 'rgb(46, 53, 29)',
        'blueGreen': 'rgb(105, 131, 133)', 
        'darkBlueGreen': 'rgb(35, 44, 44)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
