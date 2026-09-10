import type { Metadata } from 'next'
import Image from 'next/image'
import { CalendarBlank, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { CTA, Footer, FinalCTA, Header, SocialRail } from '../components/Chrome'
import { photos } from '../data'

export const metadata: Metadata = {
  title: 'Terms & Conditions | London Advanced Aesthetic Clinic',
  description: 'Terms and conditions for treatment courses at London Advanced Aesthetic Clinic. Please read carefully before making a purchase.',
}

export default function TermsPage() {
  return <><Header /><SocialRail /><main>
    <section className="editorial"><div className="editorial-image"><Image src={photos.clinic} alt="" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className="editorial-copy"><p className="eyebrow">Legal</p><h1>Treatment Course<br /><em>Terms &amp; Conditions</em></h1><p>These terms and conditions govern the purchase and use of treatment courses from London Advanced Aesthetic Clinic. Please read carefully before making a purchase.</p><CTA href="#contact"><CalendarBlank size={15} />Book a Consultation</CTA></div></section>
    <section className="section section-soft"><div className="terms-content">{sections.map(s => <div className="term-section" key={s.title}><h2>{s.title}</h2><p>{s.body}</p></div>)}</div></section>
    <FinalCTA />
  </main><Footer /></>
}

const sections = [
  { title: '1. Validity Period', body: 'All treatment courses purchased from London Advance Aesthetic Clinic are valid for 12 months from the date of purchase.' },
  { title: '2. Completion of Treatment Course', body: 'Clients are responsible for booking and completing all sessions included in their treatment course within the 12-month validity period.' },
  { title: '3. No Treatment Exchange or Substitution', body: 'Once a treatment course has been purchased, it cannot be exchanged, substituted, or swapped for another treatment or service. The course remains valid only for the specific treatment for which it was originally purchased.' },
  { title: '4. Expiry of Treatment Course', body: 'Any unused sessions remaining after the 12-month validity period will automatically expire and cannot be carried forward, exchanged, transferred, or refunded, unless otherwise agreed in writing by the clinic.' },
  { title: '5. Client Responsibility', body: 'Clients are responsible for ensuring that appointments are scheduled sufficiently in advance to allow the full course to be completed within the 12-month validity period.' },
  { title: '6. Exceptional Circumstances', body: 'Any request for an extension due to exceptional circumstances will be considered at the clinic\'s discretion and must be agreed in writing before the course expires.' }
]
