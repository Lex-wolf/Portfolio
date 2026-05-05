/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
        'border-soft': 'var(--border)',
        'tag-bg': 'var(--tag-bg)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        h2: ['clamp(2rem, 4.5vw, 3.2rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        content: '1100px',
      },
      spacing: {
        section: '5.5rem',
      },
      boxShadow: {
        'accent-glow': '0 18px 40px var(--accent-glow)',
      },
      letterSpacing: {
        'tightest-d': '-0.02em',
      },
    },
  },
  plugins: [],
};
