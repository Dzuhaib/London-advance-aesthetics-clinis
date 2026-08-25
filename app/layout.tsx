import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600'] })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' })
export const metadata: Metadata = { title: 'London Advanced Aesthetic Clinic', description: 'Refined aesthetic treatments in London, thoughtfully tailored to you.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${cormorant.variable} ${manrope.variable}`}>{children}</body></html> }
