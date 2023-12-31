/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a', 
        secondary: '#64748b',
        darkSecondary: '#c2410c',
        'color-yt': '#F61C0D',
        'color-osu!': '#e32373',
        'color-steam': '#223246',
        'color-discord': '#5865f2',
        'color-github': '#171515',
        'color-miku': '#14b8a6',
        'color-miku-secondary': '#0a665b',
        'color-wordpress': '#21759b',
        'color-c31-primary': '#23252e',
        'color-c31-secondary': '#4e5468',
        'color-getwaves-default': '#0066FF',
      },
    },
  },
  plugins: [],
};
