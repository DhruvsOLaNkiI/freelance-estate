import Link from 'next/link'
import { ArrowLeft, Shield, CheckCircle2 } from 'lucide-react'
import { Navbar, Footer } from '@/components/modulor-site'

export const metadata = {
  title: 'Privacy Policy — AVM Realty India Pvt Ltd',
  description: 'How AVM Realty India protects your personal information, property inquiries, and transaction records.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#ffffff] pt-[88px]">
        {/* Header Hero */}
        <section className="border-b border-[#E2E8F0] bg-[#F7F9FC] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1000px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#5BA4D9] transition-colors hover:text-[#E86542]"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>

            <h1 className="mt-6 text-4xl font-black uppercase leading-tight tracking-[-0.05em] text-[#1B2A4A] md:text-6xl">
              Privacy &amp; Client <br />
              <span className="text-[#E86542]">Data Governance</span> Policy.
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-[#1B2A4A]/60 font-medium">
              <span>Effective Date: January 15, 2025</span>
              <span>•</span>
              <span>Version: 3.2 (Digital Personal Data Protection &amp; RERA Compliant)</span>
              <span>•</span>
              <span className="font-bold text-[#5BA4D9]">AVM Realty India Pvt Ltd.</span>
            </div>
          </div>
        </section>

        {/* Policy Body */}
        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1000px] space-y-14 text-sm leading-7 text-[#1B2A4A]/80">
            {/* Overview Alert */}
            <div className="rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] p-6 md:p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center rounded-sm bg-[#5BA4D9]/15 text-[#5BA4D9] shrink-0 mt-1">
                  <Shield size={22} />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight text-[#1B2A4A]">
                    Our Commitment to Client Confidentiality &amp; Data Security
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#1B2A4A]/70">
                    At AVM Realty India Pvt Ltd (&ldquo;AVM Realty&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), we recognize that property acquisitions, financial budgets, KYC documents, and investment criteria represent sensitive personal assets. We maintain strict banking-grade safeguards to keep your data confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                <span>01</span>
                <span className="h-0.5 w-6 bg-[#5BA4D9]" />
                <span>Information We Collect</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                1. Data Collection Scope
              </h2>
              <p className="mt-4">
                We only gather details required to personalize property recommendations, schedule site visits, arrange home loan approvals, and facilitate legally compliant sales deeds:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Personal Identity Information: Full legal name, verified mobile and WhatsApp number, work email address, and permanent residence location.',
                  'Property Search Criteria: Preferred locality, budget parameters, residential or commercial configuration, and anticipated possession timelines.',
                  'Financial & Loan Pre-qualification: Approximate loan eligibility figures, down-payment horizon, and banking preferences strictly shared upon client consent.',
                  'Technical Browsing Metrics: Anonymous analytics identifying viewed property categories to enhance portal responsiveness.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#E86542]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                <span>02</span>
                <span className="h-0.5 w-6 bg-[#5BA4D9]" />
                <span>Application of Information</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                2. How We Utilize Your Information
              </h2>
              <p className="mt-4">
                Data collected is strictly applied to perform our fiduciary advisory duties:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm border border-[#E2E8F0] p-5 bg-[#F7F9FC]">
                  <h4 className="font-black uppercase text-xs tracking-wider text-[#1B2A4A]">
                    Curated Property Shortlists
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#1B2A4A]/65">
                    Matching your budget and typology with vetted options across verified builders and prime land pockets.
                  </p>
                </div>
                <div className="rounded-sm border border-[#E2E8F0] p-5 bg-[#F7F9FC]">
                  <h4 className="font-black uppercase text-xs tracking-wider text-[#1B2A4A]">
                    RERA &amp; Title Verification
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#1B2A4A]/65">
                    Facilitating legal title reports and encumbrance checks prior to any financial token commitments.
                  </p>
                </div>
                <div className="rounded-sm border border-[#E2E8F0] p-5 bg-[#F7F9FC]">
                  <h4 className="font-black uppercase text-xs tracking-wider text-[#1B2A4A]">
                    Private Site Visit Coordination
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#1B2A4A]/65">
                    Arranging guided private tours and developer meetings on your schedule without unwanted cold calls.
                  </p>
                </div>
                <div className="rounded-sm border border-[#E2E8F0] p-5 bg-[#F7F9FC]">
                  <h4 className="font-black uppercase text-xs tracking-wider text-[#1B2A4A]">
                    Zero Data Resale Guarantee
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-[#1B2A4A]/65">
                    We strictly never sell, trade, or monetize your contact information with external marketing databases.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                <span>03</span>
                <span className="h-0.5 w-6 bg-[#5BA4D9]" />
                <span>Security &amp; Retention</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                3. Encryption &amp; Security Standards
              </h2>
              <p className="mt-4">
                All client submissions and loan advisory records are encrypted in transit using TLS 1.3 and at rest with AES-256 standard encryption. Access is strictly limited to authorized senior advisory managers.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                <span>04</span>
                <span className="h-0.5 w-6 bg-[#5BA4D9]" />
                <span>Client Privacy Rights</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                4. Your Rights &amp; Opt-Out Mechanism
              </h2>
              <p className="mt-4">
                You maintain complete authority to request inspection, modification, or total erasure of your contact records from our advisory system. You can opt out of WhatsApp notifications at any time.
              </p>
              <p className="mt-3">
                For privacy inquiries or compliance notices, contact our Legal &amp; Compliance Office directly at{' '}
                <a href="mailto:privacy@avmrealty.in" className="font-bold text-[#E86542] underline">
                  privacy@avmrealty.in
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
