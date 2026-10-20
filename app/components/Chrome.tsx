'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CalendarBlank, CaretDown, Envelope, InstagramLogo, List, MapPin, Phone, TiktokLogo, X } from '@phosphor-icons/react'
import { conditionMenu, treatmentMenu } from '../data'
import type { MegaMenuCategory } from '../data'

// Links are root-relative so the same header works from the homepage and /treatments.
// #contact stays relative because every page renders <FinalCTA /> with that id.
const links = [['Home', '/#home'], ['Treatments', '/treatments'], ['Conditions We Treat', '/conditions'], ['About', '/#about'], ['Terms', '/terms'], ['Contact', '#contact']]

// Canonical profile URLs. The share links these came from carried throwaway tracking
// params (TikTok _r/_t session tokens, Instagram utm_source=qr) — stripped deliberately.
const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/l._aesthetic_', Icon: InstagramLogo },
  { name: 'TikTok', href: 'https://www.tiktok.com/@london_aesthetic0', Icon: TiktokLogo },
]

export function CTA({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="cta">{children}</a>
}

export function Logo() { return <a href="/#home" className="logo" aria-label="London Advanced Aesthetic Clinic"><div className="logo-mark"><img src="/Logo.png" alt="London Advanced Aesthetic Clinic" width={150} height={73} /></div></a> }

// Fixed rail on the left viewport edge. Hidden below 700px, where a 42px rail would sit
// over the content; the footer "Follow" column covers mobile.
export function SocialRail() {
  return <nav className="social-rail" aria-label="Social media">{socials.map(({ name, href, Icon }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon size={19} /></a>)}</nav>
}

type MegaNavProps = {
  menuKey: string
  label: string
  href: string
  categories: MegaMenuCategory[]
  allLabel: string
  openMenu: string | null
  setOpenMenu: (key: string | null) => void
}

function MegaNav({ menuKey, label, href, categories, allLabel, openMenu, setOpenMenu }: MegaNavProps) {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isOpen = openMenu === menuKey
  const category = categories[active] ?? categories[0]
  const panelId = `${menuKey}-mega`

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpenMenu(null) }
    const onPointer = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [isOpen, setOpenMenu])

  return <div
    ref={ref}
    className={`nav-mega${isOpen ? ' is-open' : ''}`}
    onMouseEnter={() => setOpenMenu(menuKey)}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpenMenu(null) }}
  >
    <a href={href} aria-haspopup="true" aria-expanded={isOpen} aria-controls={panelId} onFocus={() => setOpenMenu(menuKey)}>
      {label}<CaretDown size={11} weight="bold" className="nav-caret" />
    </a>
    {isOpen && <div id={panelId} className="mega-menu">
      <div className="mega-inner">
        <div className="mega-categories">
          <p className="mega-label">Explore by category</p>
          <div className="mega-cat-list" role="group" aria-label={`${label} categories`}>
            {categories.map((item, index) => <button
              key={item.name}
              type="button"
              className={`mega-cat${index === active ? ' is-active' : ''}`}
              aria-pressed={index === active}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span>{item.name}</span><ArrowRight size={14} />
            </button>)}
          </div>
        </div>
        <div className="mega-treatments" aria-live="polite">
          <div className="mega-treatment-head">
            <div>
              <p className="eyebrow">Category</p>
              <h3>{category.name}</h3>
            </div>
            <p>{category.intro}</p>
          </div>
          <ul className="mega-links">
            {category.items.map(item => <li key={item.name}><a href={item.href}>{item.name}<ArrowRight size={13} /></a></li>)}
          </ul>
          <a href={href} className="mega-all">{allLabel} <ArrowRight size={14} /></a>
        </div>
      </div>
    </div>}
  </div>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return <header className="site-header" onMouseLeave={() => setOpenMenu(null)}><div className="header-inner"><Logo /><nav className="desktop-nav" aria-label="Primary">{links.map(([label, href]) => href === '/treatments'
    ? <MegaNav key={href} menuKey="treatments" label={label} href={href} categories={treatmentMenu} allLabel="View all treatments" openMenu={openMenu} setOpenMenu={setOpenMenu} />
    : href === '/conditions'
      ? <MegaNav key={href} menuKey="conditions" label={label} href={href} categories={conditionMenu} allLabel="View all conditions we treat" openMenu={openMenu} setOpenMenu={setOpenMenu} />
      : <a key={href} href={href} onMouseEnter={() => setOpenMenu(null)} onFocus={() => setOpenMenu(null)}>{label}</a>)}</nav><div className="header-action"><CTA><CalendarBlank size={15} />Book a Consultation</CTA></div><button className="menu-trigger" aria-label="Open menu" onClick={() => setOpen(true)}><List size={24} /></button></div>{open && <div className="mobile-menu"><div className="mobile-menu-top"><Logo /><button aria-label="Close menu" onClick={() => setOpen(false)}><X size={24} /></button></div><nav>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><CTA><CalendarBlank size={15} />Book a Consultation</CTA></div>}</header>
}

export function FinalCTA() {
  return <section id="contact" className="final-cta"><p className="eyebrow">Begin with a conversation</p><h2>Your best look starts<br />with a conversation.</h2><p>Book a private consultation and discover the treatments suited to you.</p><div><CTA><CalendarBlank size={15} />Book a Consultation</CTA><a href="mailto:hello@londonadvancedaesthetics.co.uk" className="text-link">Contact the clinic <ArrowRight size={15} /></a></div></section>
}

export function Footer() {
  return <footer className="footer"><div className="footer-grid"><div><Logo /><p>Refined aesthetic care, thoughtfully tailored in London.</p></div><div><p className="footer-label">Explore</p><a href="/treatments">Treatments</a><a href="/conditions">Conditions We Treat</a><a href="/#about">About</a></div><div><p className="footer-label">Connect</p><p><Envelope size={15} /> hello@londonadvancedaesthetics.co.uk</p><p><Phone size={15} /> Contact details to be supplied</p><p><MapPin size={15} /> London, United Kingdom</p></div><div><p className="footer-label">Follow</p>{socials.map(({ name, href, Icon }) => <a className="footer-social" key={name} href={href} target="_blank" rel="noopener noreferrer"><Icon size={16} />{name}</a>)}</div></div><div className="footer-bottom"><span>© 2026 London Advanced Aesthetic Clinic</span><span>Privacy · <a href="/terms">Terms</a> · Cookies</span></div></footer>
}
