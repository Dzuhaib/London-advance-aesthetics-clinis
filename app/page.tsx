'use client'

import Image, { getImageProps } from 'next/image'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, CalendarBlank, CaretLeft, CaretRight, CellSignalHigh, ChartLineUp, ChatCircleText, Check, CircleDashed, ClipboardText, Dna, Drop, DropHalf, EnvelopeSimple, Eye, Flask, FlowerLotus, GoogleLogo, GraduationCap, HandHeart, Lightning, Microscope, Minus, Needle, NotePencil, Phone, PlayCircle, Plus, Scissors, SealCheck, ShieldCheck, Sparkle, SunDim, Syringe, TestTube, Waves, WhatsappLogo } from '@phosphor-icons/react'
import { CTA, Footer, FinalCTA, Header, SocialRail } from './components/Chrome'
import { googleReviews, photos, treatments } from './data'

const PER_VIEW = 5
const featured = treatments.filter(t => t.featured)

const heroImage = { alt: "Aesthetic practitioner assessing a client's skin", sizes: '100vw', quality: 95 }
const { props: { srcSet: heroDesktopSrcSet } } = getImageProps({ ...heroImage, fill: true, src: '/hero-desktop.png' })
const { props: { srcSet: heroMobileSrcSet, ...heroMobileProps } } = getImageProps({ ...heroImage, fill: true, src: '/hero-mobile.png' })

const treatmentIcons: Record<string, typeof Syringe> = {
  'anti-wrinkle': Syringe,
  'dermal-fillers': Drop,
  'face-prp': TestTube,
  'lumi-eyes': Eye,
  'profhilo': Waves,
  'polynucleotides': Dna,
  'skin-boosters': DropHalf,
  'microneedling': Needle,
  'skin-rejuvenation': SunDim,
  'exosomes-therapy': CellSignalHigh,
  'hair-prp': Scissors,
  'fat-dissolving-injections': Flask,
  'laser-hair-removal': Lightning,
  'hijama-cupping-therapy': CircleDashed,
}

const journey = [
  { n: '01', title: 'Consultation', copy: 'Discuss your concerns, goals and treatment options.', Icon: ChatCircleText },
  { n: '02', title: 'Personalised plan', copy: 'Receive clear recommendations based on your individual needs.', Icon: ClipboardText },
  { n: '03', title: 'Treatment', copy: 'Your chosen treatment is performed with care and precision.', Icon: Sparkle },
  { n: '04', title: 'Aftercare', copy: 'Receive guidance and support throughout your recovery and results.', Icon: HandHeart },
]

const contactWays = [
  { label: 'Fill in our short online form', href: '#contact', Icon: NotePencil },
  { label: 'Email us', href: 'mailto:hello@londonadvancedaesthetics.co.uk', Icon: EnvelopeSimple },
  { label: 'Call your local branch', href: '#contact', Icon: Phone },
  { label: 'WhatsApp', href: '#contact', Icon: WhatsappLogo },
]

const standards = [
  { label: 'All of our practitioners undergo regular training', Icon: GraduationCap },
  { label: 'Safe and hygienic environment', Icon: ShieldCheck },
  { label: 'Effective treatment results', Icon: ChartLineUp },
  { label: 'Latest technology & training', Icon: Microscope },
  { label: 'On-going quality checks', Icon: SealCheck },
]

const faqs = [
  { q: 'Do I need a consultation before treatment?', a: 'Yes. Every treatment begins with an unhurried consultation so we can assess your concerns, review your suitability and recommend only what is right for you.' },
  { q: 'Is the consultation free?', a: 'We offer free consultations for all of our treatments, with same-day appointments available depending on availability.' },
  { q: 'Are your treatments safe?', a: 'All of our practitioners undergo regular training, and we work to strict hygiene and on-going quality standards to keep every visit safe and comfortable.' },
  { q: 'Which areas can you treat?', a: 'Our treatments cover the face, skin, body and hair, including laser hair removal, skin pigmentation peels and fat dissolving.' },
  { q: 'Is there any downtime?', a: 'Downtime depends on the treatment. Some involve little to no downtime, while others may leave temporary redness or sensitivity. Your practitioner will explain what to expect beforehand.' },
  { q: 'Do you offer same-day appointments or walk-ins?', a: 'Yes. Same-day appointments are available depending on availability, and walk-ins are welcome. Booking ahead is recommended to secure your preferred time.' },
]

const promises = [
  { title: 'Safe and Hygienic Environment', copy: 'A very safe and hygienic environment. Your safety is important to us.', Icon: ShieldCheck },
  { title: 'Effective Treatment Results', copy: 'Including hair loss and skin pigmentation treatment.', Icon: ChartLineUp },
  { title: 'Latest Technology and Training', copy: 'Staff are highly trained and exceed the standards of many top clinics.', Icon: Microscope },
  { title: 'On-going Treatment Quality Checks', copy: 'A fantastic level of customer service with regular staff.', Icon: SealCheck },
]

function TreatmentSlider() {
  const [start, setStart] = useState(0)
  const maxStart = Math.max(0, featured.length - PER_VIEW)
  return <div><div className="treatment-grid">{featured.slice(start, start + PER_VIEW).map(t => { const Icon = treatmentIcons[t.slug] ?? FlowerLotus; return <article className="treatment-card" key={t.slug}><div className="treatment-image"><Image src={t.image} alt="" fill sizes="(max-width: 700px) 85vw, 20vw" /><span className="service-icon" aria-hidden="true"><Icon size={20} weight="thin" /></span></div><div className="treatment-copy"><h3>{t.name}</h3><p>{t.short}</p><a href={`/treatments#${t.slug}`}>Explore treatment <ArrowUpRight size={14} weight="thin" /></a></div></article> })}</div><div className="slider-controls"><span>{String(start + 1).padStart(2, '0')} / {String(maxStart + 1).padStart(2, '0')}</span><div><button aria-label="Previous treatments" disabled={start === 0} onClick={() => setStart(Math.max(0, start - 1))}><CaretLeft size={18} weight="thin" /></button><button aria-label="Next treatments" disabled={start >= maxStart} onClick={() => setStart(Math.min(maxStart, start + 1))}><CaretRight size={18} weight="thin" /></button></div></div></div>
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return <div className={`faq-item${open ? ' is-open' : ''}`}><button type="button" className="faq-question" aria-expanded={open} onClick={() => setOpen(!open)}><span>{q}</span><span className="faq-toggle" aria-hidden="true">{open ? <Minus size={18} weight="thin" /> : <Plus size={18} weight="thin" />}</span></button><div className="faq-answer"><div><p>{a}</p></div></div></div>
}

export default function Page() {
  return <><Header /><SocialRail /><main>
    <section id="home" className="hero"><div className="hero-media"><picture><source media="(min-width: 701px)" srcSet={heroDesktopSrcSet} /><img {...heroMobileProps} srcSet={heroMobileSrcSet} className="hero-bg" fetchPriority="high" alt="Aesthetic practitioner assessing a client's skin" /></picture></div><div className="hero-copy"><h1>Advanced aesthetics.<br /><em>In London.</em></h1><p className="hero-text">Refined treatments designed to enhance your natural confidence.</p><div className="hero-actions"><CTA><CalendarBlank size={15} />Book a Consultation</CTA><a href="#treatments" className="text-link">Explore Treatments <ArrowRight size={15} /></a></div><a className="review-card" href={googleReviews.href} target="_blank" rel="noopener noreferrer"><span className="review-icon"><GoogleLogo size={20} weight="fill" /></span><span className="review-body"><span className="review-top"><strong>{googleReviews.rating}</strong><span className="review-stars" aria-hidden="true">★★★★★</span></span><span className="review-label">{googleReviews.label}</span></span><ArrowRight size={15} className="review-arrow" /></a></div></section>
    <section className="trust" aria-labelledby="trust-title"><div className="trust-inner"><div className="trust-head"><p className="eyebrow">The London Advanced Aesthetic Clinic</p><h2 id="trust-title">Our promise to you</h2></div><div className="trust-grid">{promises.map(({ title, copy, Icon }) => <div className="trust-item" key={title}><span className="trust-icon" aria-hidden="true"><Icon size={26} weight="duotone" /></span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
    <section id="about" className="story" aria-labelledby="story-title"><div className="story-inner"><div className="story-top"><div className="story-image"><Image src="/team.jpeg" alt="The London Advanced Aesthetic Clinic team" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="story-copy"><p className="eyebrow">Our story</p><h2 id="story-title">Here to achieve your skin and body goals</h2><p>London Advanced Aesthetic Clinic was established in 2004 and we have helped thousands of happy clients to achieve their desired outcomes. We aim to provide the highest quality medical-graded treatments for skin, body and hair concerns. Our practitioners are all highly qualified and experienced in delivering a wide range of cosmetic and aesthetic treatments to the best industry standards.</p></div></div><div className="story-bottom"><p>We have nine aesthetic and laser clinics across London &amp; Essex. Our clinics are equipped with advanced medical technology and highly trained practitioners who ensure all of our clients achieve optimal results.</p><div className="story-actions"><CTA href="#contact"><CalendarBlank size={15} />Book Online</CTA><a href="#contact" className="cta-outline"><Phone size={15} />Request a Call Back</a></div></div></div></section>
    <section id="treatments" className="section section-soft services"><div className="section-head services-head"><div><p className="eyebrow"><FlowerLotus size={13} weight="thin" /> Our services</p><h2>Advanced treatments,<br /><em>carefully chosen</em></h2></div><div className="section-head-aside"><p>Explore treatments designed to refresh, restore and enhance your natural features, alongside our IV drips and vitamin injections.</p><a href="/treatments" className="text-link">View all treatments <ArrowUpRight size={15} weight="thin" /></a></div></div><TreatmentSlider /></section>
    <section className="editorial feature choose"><div className="editorial-copy"><p className="eyebrow">Why choose us</p><h2>Choose<br /><em>London Advanced</em><br />Aesthetic Clinic</h2><a href="#" className="video-link"><PlayCircle size={32} weight="thin" /><span>Watch our video</span></a><p>We aim to provide you with the highest quality aesthetic and laser treatments by ensuring:</p><ul><li><Check size={16} />All of our practitioners undergo regular training</li><li><Check size={16} />A safe and hygienic environment</li><li><Check size={16} />Results driven treatments</li><li><Check size={16} />We use the latest technology</li><li><Check size={16} />On-going quality checks</li><li><Check size={16} />Exemplary customer service</li></ul><p>We offer free consultations for all our treatments and same-day appointments, depending on availability.</p><a href="/blog" className="text-link">Read our blog for helpful insights into the world of aesthetics <ArrowRight size={15} /></a></div><div className="editorial-image feature-image"><Image src={photos.feature} alt="Skincare treatment detail" fill sizes="(max-width: 900px) 100vw, 50vw" /></div></section>
    <section id="get-in-touch" className="ways" aria-labelledby="ways-title"><div className="ways-inner"><div className="ways-top"><div className="ways-head"><p className="eyebrow">Get in touch</p><h2 id="ways-title">Take the first step to a happier, more confident you</h2><p>There are several ways to get in touch with the teams at London Advanced Aesthetic Clinic in London and Essex:</p></div><div className="ways-list">{contactWays.map(({ label, href, Icon }) => <a className="way-item" href={href} key={label}><span className="way-icon" aria-hidden="true"><Icon size={22} weight="thin" /></span><span className="way-label">{label}</span><ArrowUpRight size={16} weight="thin" className="way-arrow" /></a>)}</div></div><div className="ways-notes"><p>Once you submit a contact form, one of our friendly consultants will be in touch with you to discuss your concerns, answer your questions, and book your chosen treatment or consultation.</p><p>We provide no-obligation consultations to make sure you get your individual concerns addressed. All our consultants have the expertise to understand your requirements and assist you in choosing the most suitable treatment.</p></div></div></section>
    <section className="quality" aria-labelledby="quality-title"><div className="quality-inner"><div className="quality-head"><p className="eyebrow">Our standard</p><h2 id="quality-title">We aim to provide you with the highest quality aesthetic and laser treatments</h2></div><div className="quality-grid">{standards.map(({ label, Icon }) => <div className="quality-item" key={label}><span className="quality-icon" aria-hidden="true"><Icon size={24} weight="thin" /></span><span className="quality-label">{label}</span></div>)}</div></div></section>
    <section className="local" aria-labelledby="local-title"><div className="local-inner"><div className="local-copy"><p className="eyebrow">East London</p><h2 id="local-title">Your Local Aesthetics Clinic in East London</h2><p>Established in 2001, we are dedicated to making you look and feel fabulous! Offering a comprehensive range of results-driven treatments from Laser Hair Removal in East London and Essex, to advanced Skin Pigmentation Peels and Fat Dissolving at our nine clinics across London and Essex.</p><p>We provide free consultations for all our treatments and offer same-day appointments. We also welcome walk-ins.</p></div><div className="local-image"><Image src={photos.philosophy} alt="A facial treatment at the clinic" fill sizes="(max-width: 900px) 100vw, 50vw" /></div></div></section>
    <section className="clinic-banner"><Image src={photos.clinic} alt="Refined treatment room in a London clinic" fill sizes="100vw" /><div className="clinic-overlay"><p className="eyebrow">The clinic</p><h2>A calm space in the heart of London</h2><p>Private, comfortable and quietly refined, designed around your visit.</p><a href="#contact" className="text-link light">Visit the clinic <ArrowRight size={15} /></a></div></section>
    <section className="journey section"><div className="section-head"><div><p className="eyebrow">Your treatment journey</p><h2>Clear at every step</h2></div><p>From the first conversation to aftercare, you will know what to expect.</p></div><ol className="journey-grid">{journey.map(({ n, title, copy, Icon }) => <li className="journey-step" key={n}><span className="journey-node" aria-hidden="true"><Icon size={23} /></span><span className="journey-num">{n}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol><div className="journey-cta"><p>Every journey begins with a conversation, and there is never any obligation to book.</p><CTA><CalendarBlank size={15} />Book a Consultation</CTA></div></section>
    <section id="faqs" className="faqs" aria-labelledby="faqs-title"><div className="faqs-inner"><div className="faqs-head"><p className="eyebrow">FAQs</p><h2 id="faqs-title">Questions, answered</h2><p>Everything you need to know before your visit. If your question is not here, our team is always happy to help.</p><a href="#contact" className="text-link">Ask us a question <ArrowRight size={15} /></a></div><div className="faqs-list">{faqs.map(f => <Faq key={f.q} q={f.q} a={f.a} />)}</div></div></section>
    <FinalCTA />
  </main><Footer /></>
}
