import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import './globals.css'

// Italic is loaded because the hero and featured headings use <em> accents.
const display = Libre_Baskerville({ subsets: ['latin'], variable: '--font-display', weight: ['400', '700'], style: ['normal', 'italic'] })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
export const metadata: Metadata = { title: 'London Advanced Aesthetic Clinic', description: 'Refined aesthetic treatments in London, thoughtfully tailored to you.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html> }
