import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'London Advanced Aesthetic Clinic', description: 'Refined aesthetic treatments in London, thoughtfully tailored to you.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
