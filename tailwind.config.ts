import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#07050E',
        void2: '#0C0917',
        build: '#7C3AED',
        buildLit: '#A78BFA',
        run: '#D946EF',
        live: '#2DD4BF',
        ink: '#EFECF8',
        inkDim: '#9E96BC',
        inkFaint: '#6B6486',
        glass: 'rgba(255,255,255,.045)',
        glass2: 'rgba(255,255,255,.07)',
        edge: 'rgba(167,139,250,.16)',
        edgeHot: 'rgba(167,139,250,.45)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
      },
      maxWidth: { prose: '66ch' },
      letterSpacing: { tightest: '-0.035em' },
    },
  },
  plugins: [],
};
export default config;
