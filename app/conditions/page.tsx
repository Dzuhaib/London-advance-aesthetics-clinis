import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, CalendarBlank } from '@phosphor-icons/react/dist/ssr'
import { CTA, Footer, FinalCTA, Header, SocialRail } from '../components/Chrome'
import { conditionCategories, photos } from '../data'

export const metadata: Metadata = {
  title: 'Conditions We Treat | London Advanced Aesthetic Clinic',
  description: 'Conditions we assess and treat at London Advanced Aesthetic Clinic, covering the face, hair and scalp, body, and intimate or sensitive areas.',
}

export default function ConditionsPage() {
  return <><Header /><SocialRail /><main>
    <section className="editorial treatments-intro"><div className="editorial-copy"><p className="eyebrow">Conditions we treat</p><h1>Conditions, carefully assessed</h1><p>Many of the concerns we see are common, but no two are quite the same. We look at the cause, your skin and your history before recommending a treatment, so the plan is shaped around you rather than a standard menu.</p><p>If you are unsure which category fits, start with a consultation. We will listen, assess and explain the options that make sense.</p><nav className="cat-nav" aria-label="Condition categories">{conditionCategories.map(c => <a key={c.slug} href={`#${c.slug}`}>{c.name}</a>)}</nav></div><div className="editorial-image tall"><Image src={photos.treatments} alt="A skin assessment in progress at the clinic" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>

    {conditionCategories.map((category, i) => <section id={category.slug} key={category.slug} className={`section condition-section${i % 2 ? ' section-soft' : ''}`}><div className="section-head"><div><p className="eyebrow">{String(i + 1).padStart(2, '0')} — Conditions</p><h2>{category.name}</h2></div><p>{category.intro}</p></div><div className="condition-grid">{category.conditions.map(condition => <article id={condition.slug} key={condition.slug} className="condition-card"><h3>{condition.name}</h3><p>{condition.summary}</p><a href="#contact">Book a consultation <ArrowRight size={14} /></a></article>)}</div></section>)}

    <section className="note-band"><p className="treatment-note">The information on this page is general and is not a diagnosis. Suitability is assessed during a private consultation, and some conditions may need to be reviewed by a doctor or another specialist before aesthetic treatment is considered.</p><CTA><CalendarBlank size={15} />Book a Consultation</CTA></section>
    <FinalCTA />
  </main><Footer /></>
}
