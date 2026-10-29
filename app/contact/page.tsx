'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'
import { Navbar, Footer } from '@/components/modulor-site'

const offices = [
  {
    city: 'Mumbai',
    role: 'Corporate Headquarters & Investment Advisory',
    address: 'BKC Financial Center, Level 14',
    locality: 'Bandra Kurla Complex, Mumbai, Maharashtra 400051',
    phone: '+91 (22) 6120-8400',
    email: 'mumbai@avmrealty.in',
    hours: '09:30 — 18:30 IST',
  },
  {
    city: 'Bengaluru',
    role: 'Tech Corridors & Commercial Desk',
    address: 'Indiranagar 100ft Road, Suite 302',
    locality: 'HAL 2nd Stage, Bengaluru, Karnataka 560038',
    phone: '+91 (80) 4192-3300',
    email: 'blr@avmrealty.in',
    hours: '09:30 — 18:30 IST',
  },
  {
    city: 'Delhi NCR',
    role: 'High-Growth Plots & Luxury Living Hub',
    address: 'Golf Course Road, One Horizon Center',
    locality: 'DLF Phase 5, Gurugram, Haryana 122002',
    phone: '+91 (124) 4920-1100',
    email: 'delhi@avmrealty.in',
    hours: '09:30 — 18:30 IST',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    budgetRange: '₹50 Lakhs — ₹1 Crore',
    location: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          lookingFor: formData.projectType,
          budgetRange: formData.budgetRange,
          location: formData.location,
          message: formData.message,
          source: 'Contact Page Advisory Request',
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.details || data.error || 'Failed to submit inquiry')
      }

      setSubmitted(true)
    } catch (err: any) {
      console.error(err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar activePage="contact" />

      <main className="bg-[#ffffff] pt-[88px]">
        {/* Header Hero with Architectural Background */}
        <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#ffffff] px-6 py-20 lg:px-12 lg:py-28">
          {/* Background Architectural Building Overlay */}
          <Image
            src="/hero-steel.png"
            alt="Real estate architectural building"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-[#ffffff]/85 to-[#F7F9FC]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-[#ffffff]/30" />

          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
              <span className="h-0.5 w-10 bg-[#5BA4D9]" />
              05 / Connect
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl text-[clamp(2.2rem,4.8vw,4.5rem)] font-black uppercase leading-[1.02] tracking-[-0.03em] text-[#1B2A4A]"
            >
              Start your journey. <br />
              <span className="text-[#E86542]">Consult</span> with our experts.
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1B2A4A]/75 md:text-lg">
              Whether you are buying your dream residence, seeking high-yield pre-leased commercial assets, or acquiring growth corridor land, our advisory team is ready.
            </p>
          </div>
        </section>

        {/* Form & Office Grid */}
        <section className="px-6 py-20 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-16 lg:grid-cols-[1.3fr_0.9fr]">
              {/* Consultation / Project Form */}
              <div className="rounded-sm border border-[#E2E8F0] bg-white p-8 md:p-12 shadow-sm">
                <div className="mb-8 border-b border-[#E2E8F0] pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E86542]">
                    Property Consultation
                  </span>
                  <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-[#1B2A4A]">
                    Direct Advisory Request
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-[#1B2A4A]/65">
                    Our senior property advisors conduct an initial portfolio matching session within 2 business hours.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-sm border border-[#5BA4D9] bg-[#F7F9FC] p-8 text-center"
                  >
                    <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-[#5BA4D9] text-white">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#1B2A4A]">
                      Inquiry Logged
                    </h3>
                    <p className="mt-2 text-sm text-[#1B2A4A]/75">
                      Thank you, <span className="font-bold text-[#1B2A4A]">{formData.name || 'there'}</span>. Our specialist has received your requirements and will reach out via <span className="font-bold text-[#E86542]">{formData.phone || formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-sm border border-[#E2E8F0] bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1B2A4A] hover:border-[#5BA4D9] hover:text-[#5BA4D9]"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Malhotra"
                          className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                          Phone / WhatsApp *
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="vikram@enterprise.com"
                          className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                          Preferred City / Locality
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. South Mumbai or Whitefield"
                          className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                          Property Typology
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                        >
                          <option>Residential (Apartment / Villa)</option>
                          <option>Commercial (Retail / Office)</option>
                          <option>Plots / Land Parcel</option>
                          <option>High-Yield Pre-Leased</option>
                          <option>RERA & Legal Advisory</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                          Planned Budget
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                        >
                          <option>Below ₹50 Lakhs</option>
                          <option>₹50 Lakhs — ₹1 Crore</option>
                          <option>₹1 Crore — ₹3 Crores</option>
                          <option>₹3 Crores — ₹10 Crores</option>
                          <option>₹10 Crores+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                        Specific Requirements / Questions
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your preferred possession timeframe, carpet area requirements, or loan requirements..."
                        className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                      />
                    </div>

                    {errorMsg && (
                      <p className="rounded-xs border border-red-200 bg-red-50 p-2 text-xs text-red-600">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex w-full items-center justify-center gap-2 rounded-sm bg-[#E86542] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm transition-all hover:bg-[#d65533] hover:shadow-md cursor-pointer disabled:opacity-60"
                    >
                      <span>{loading ? 'Submitting...' : 'Submit Advisory Request'}</span>
                      <Send size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Offices & Contact Points */}
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5BA4D9]">
                    Network
                  </span>
                  <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                    Regional Advisory Hubs
                  </h2>
                </div>

                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-sm border border-[#E2E8F0] bg-white p-6 shadow-xs transition-all hover:border-[#5BA4D9]"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-black uppercase tracking-tight text-[#1B2A4A]">
                          {office.city}
                        </h3>
                        <span className="rounded-xs border border-[#5BA4D9]/30 bg-[#5BA4D9]/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#5BA4D9] font-bold">
                          Active Hub
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-[#E86542]">{office.role}</p>

                      <div className="mt-4 space-y-2 text-xs text-[#1B2A4A]/70">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="shrink-0 text-[#5BA4D9]" />
                          <span>
                            {office.address}, {office.locality}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} className="shrink-0 text-[#5BA4D9]" />
                          <a href={`tel:${office.phone}`} className="font-medium text-[#1B2A4A] hover:text-[#E86542]">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="shrink-0 text-[#5BA4D9]" />
                          <a href={`mailto:${office.email}`} className="font-bold text-[#1B2A4A] hover:text-[#5BA4D9]">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-[#1B2A4A]/50">
                          <Clock size={14} className="shrink-0 text-[#5BA4D9]" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Help Notice */}
                <div className="rounded-sm border-l-4 border-[#E86542] bg-[#F7F9FC] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1B2A4A]">
                    Partner With AVM Realty
                  </p>
                  <p className="mt-1 text-xs text-[#1B2A4A]/70">
                    Are you a developer, landowner, or institutional fund seeking exclusive mandates? Reach out to{' '}
                    <a href="mailto:partners@avmrealty.in" className="font-bold text-[#E86542] underline">
                      partners@avmrealty.in
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
