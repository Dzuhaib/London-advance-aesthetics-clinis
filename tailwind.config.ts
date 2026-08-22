import type { Config } from 'tailwindcss'
export default { content: ['./app/**/*.{ts,tsx}'], theme: { extend: { colors: { gold: '#C9A227', ink: '#171717', warm: '#F8F7F3' }, fontFamily: { display: ['var(--font-cormorant)'], sans: ['var(--font-manrope)'] } } }, plugins: [] } satisfies Config
