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
  { title: '1. Course Validity', body: 'All treatment courses must be completed within 12 months of the purchase date. Any unused treatments remaining after this period will automatically expire and cannot be carried forward.' },
  { title: '2. No-Refund Policy', body: 'All treatment courses are non-refundable. No refunds will be issued for unused treatments or expired courses, subject to applicable consumer law.' },
  { title: '3. Non-Transferable Treatments', body: 'Treatment courses are valid only for the specific treatment purchased. Courses cannot be transferred, exchanged, or switched to any other treatment or treatment course.' },
  { title: '4. Flexible Payment Plans', body: 'Payment plan options are available for all treatment courses. Please speak to our team for further details about available payment options.' },
  { title: 'Agreement', body: 'By purchasing a treatment course, clients agree to these terms and conditions.' }
]
