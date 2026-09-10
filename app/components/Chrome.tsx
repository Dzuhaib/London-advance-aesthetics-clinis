'use client'

import { useState } from 'react'
import { ArrowRight, CalendarBlank, Envelope, InstagramLogo, List, MapPin, Phone, TiktokLogo, X } from '@phosphor-icons/react'

// Links are root-relative so the same header works from the homepage and /treatments.
// #contact stays relative because every page renders <FinalCTA /> with that id.
const links = [['Home', '/#home'], ['Treatments', '/treatments'], ['Results', '/#results'], ['About', '/#about'], ['Terms', '/terms'], ['Contact', '#contact']]

// Canonical profile URLs. The share links these came from carried throwaway tracking
// params (TikTok _r/_t session tokens, Instagram utm_source=qr) — stripped deliberately.
const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/l._aesthetic_', Icon: InstagramLogo },
  { name: 'TikTok', href: 'https://www.tiktok.com/@london_aesthetic0', Icon: TiktokLogo },
]

export function CTA({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="cta">{children}</a>
}

export function Logo() { return <a href="/#home" className="logo" aria-label="London Advanced Aesthetic Clinic"><span className="logo-mark">LA</span><span>London Advanced<br />Aesthetic Clinic</span></a> }

// Fixed rail on the left viewport edge. Hidden below 700px, where a 42px rail would sit
// over the content; the footer "Follow" column covers mobile.
export function SocialRail() {
  return <nav className="social-rail" aria-label="Social media">{socials.map(({ name, href, Icon }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon size={19} /></a>)}</nav>
}

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="header-inner"><Logo /><nav className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><div className="header-action"><CTA><CalendarBlank size={15} />Book a Consultation</CTA></div><button className="menu-trigger" aria-label="Open menu" onClick={() => setOpen(true)}><List size={24} /></button></div>{open && <div className="mobile-menu"><div className="mobile-menu-top"><Logo /><button aria-label="Close menu" onClick={() => setOpen(false)}><X size={24} /></button></div><nav>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><CTA><CalendarBlank size={15} />Book a Consultation</CTA></div>}</header>
}

export function FinalCTA() {
  return <section id="contact" className="final-cta"><p className="eyebrow">Begin with a conversation</p><h2>Your best look starts<br />with a conversation.</h2><p>Book a private consultation and discover the treatments suited to you.</p><div><CTA><CalendarBlank size={15} />Book a Consultation</CTA><a href="mailto:hello@londonadvancedaesthetics.co.uk" className="text-link">Contact the clinic <ArrowRight size={15} /></a></div></section>
}

export function Footer() {
  return <footer className="footer"><div className="footer-grid"><div><Logo /><p>Refined aesthetic care, thoughtfully tailored in London.</p></div><div><p className="footer-label">Explore</p><a href="/treatments">Treatments</a><a href="/#results">Results</a><a href="/#about">About</a></div><div><p className="footer-label">Connect</p><p><Envelope size={15} /> hello@londonadvancedaesthetics.co.uk</p><p><Phone size={15} /> Contact details to be supplied</p><p><MapPin size={15} /> London, United Kingdom</p></div><div><p className="footer-label">Follow</p>{socials.map(({ name, href, Icon }) => <a className="footer-social" key={name} href={href} target="_blank" rel="noopener noreferrer"><Icon size={16} />{name}</a>)}</div></div><div className="footer-bottom"><span>© 2026 London Advanced Aesthetic Clinic</span><span>Privacy · <a href="/terms">Terms</a> · Cookies</span></div></footer>
}
