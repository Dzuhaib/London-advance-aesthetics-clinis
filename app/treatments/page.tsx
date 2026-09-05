import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, CalendarBlank, Sparkle } from '@phosphor-icons/react/dist/ssr'
import { CTA, Footer, FinalCTA, Header, SocialRail } from '../components/Chrome'
import { menuGroups, photos, treatments } from '../data'

export const metadata: Metadata = {
  title: 'Treatments | London Advanced Aesthetic Clinic',
  description: 'The full menu at London Advanced Aesthetic Clinic — aesthetic treatments including PRP, Profhilo, exosomes and laser hair removal, plus IV drips and IM vitamin injections.',
}

export default function TreatmentsPage() {
  return <><Header /><SocialRail /><main>
    <section className="editorial treatments-intro"><div className="editorial-copy"><p className="eyebrow">The treatment menu</p><h1>Treatments, carefully chosen</h1><p>Our menu covers three areas: aesthetic treatments for the face, skin and hair, IV drips, and vitamin injections. Everything here has been selected because it does something specific and does it well.</p><p>If you are unsure what would suit you, start with a consultation. We will talk it through and recommend only what makes sense for you.</p><nav className="cat-nav" aria-label="Treatment categories"><a href="#treatments">Treatments</a>{menuGroups.map(g => <a key={g.slug} href={`#${g.slug}`}>{g.name}</a>)}</nav></div><div className="editorial-image tall"><Image src={photos.treatments} alt="A facial treatment in progress at the clinic" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>

    <section id="treatments" className="section section-soft"><div className="section-head"><div><p className="eyebrow">Face, skin &amp; hair</p><h2>Treatments</h2></div><p>Each treatment begins with an unhurried consultation, so you know what to expect before anything is booked.</p></div><div className="treatment-list">{treatments.map(t => <article className="treatment-card" id={t.slug} key={t.slug}><div className="treatment-image"><Image src={t.image} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 30vw" /></div><div className="treatment-copy"><Sparkle size={16} className="gold" /><h3>{t.name}</h3><p>{t.detail}</p><a href="#contact">Book a consultation <ArrowRight size={14} /></a></div></article>)}</div></section>

    {menuGroups.map((g, i) => <section id={g.slug} key={g.slug} className={`section menu-section${i % 2 ? ' section-soft' : ''}`}><div className="section-head"><div><p className="eyebrow">{i ? 'Intramuscular' : 'Intravenous'}</p><h2>{g.name}</h2></div><p>{g.blurb}</p></div><div className="menu-block"><div className="menu-visual"><Image src={g.image} alt={g.alt} fill sizes="(max-width: 900px) 100vw, 42vw" /></div><ul className="menu-rows">{g.items.map(item => <li className="menu-row" key={item.name}><h3>{item.name}</h3><p>{item.benefit}</p></li>)}</ul></div><CTA><CalendarBlank size={15} />Book a Consultation</CTA></section>)}

    <section className="note-band"><p className="treatment-note">Individual results vary, and no treatment is suitable for everyone. Suitability is assessed during consultation, and nothing is carried out on a first visit unless it is right for you.</p></section>
    <FinalCTA />
  </main><Footer /></>
}
