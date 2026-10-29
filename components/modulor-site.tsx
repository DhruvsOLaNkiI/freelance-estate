'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  Mouse,
  CheckCircle2,
  Building2,
  Store,
  Map,
  BadgePercent,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Residential Property', href: '/residential' },
  { name: 'Commercial Property', href: '/commercial' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar({ activePage }: { activePage?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#E2E8F0] bg-[#ffffff]/95 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <Link href="/" className="group flex items-center py-1" aria-label="AVM Realty home">
          <Image
            src="/avm-logo.png"
            alt="AVM Realty India Pvt Ltd"
            width={160}
            height={160}
            className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activePage === item.name.toLowerCase()
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative py-2 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive ? 'text-[#E86542]' : 'text-[#1B2A4A]/70 hover:text-[#1B2A4A]'
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#E86542] transition-transform ${
                    isActive ? 'scale-x-100' : 'origin-left scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <a
          href="#lead-form"
          className="hidden items-center gap-2 rounded-sm bg-[#E86542] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:bg-[#d65533] hover:shadow-md sm:flex"
        >
          Get Callback <ArrowUpRight size={14} />
        </a>

        <button
          className="text-[#1B2A4A] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex min-h-[calc(100vh-88px)] flex-col gap-7 border-t border-[#E2E8F0] bg-[#ffffff] px-6 py-12 md:hidden"
        >
          {navItems.map((item, i) => (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              key={item.name}
            >
              <Link
                onClick={() => setOpen(false)}
                href={item.href}
                className="text-3xl font-black uppercase tracking-tight text-[#1B2A4A]"
              >
                {item.name}
                <span className="text-[#E86542]">.</span>
              </Link>
            </motion.div>
          ))}
          <a
            onClick={() => setOpen(false)}
            href="#lead-form"
            className="mt-4 flex items-center justify-center gap-2 rounded-sm bg-[#E86542] py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white"
          >
            Get Priority Callback <PhoneCall size={15} />
          </a>
        </motion.nav>
      )}
    </header>
  )
}

/* =========================================================================
   1. HERO SECTION
   ========================================================================= */
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] lg:min-h-screen flex-col justify-between overflow-hidden bg-[#ffffff] pt-28 pb-12 lg:pt-32 lg:pb-16">
      {/* Background Architectural Overlay */}
      <Image
        src="/hero-steel.png"
        alt="Premium modern architectural structures and prime real estate spaces"
        fill
        priority
        className="object-cover object-center opacity-65 contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/95 from-5% via-[#ffffff]/60 via-45% to-transparent to-80%" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/80 via-transparent to-[#ffffff]/10" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12 my-auto">
        {/* Top Tagline Badge */}
        <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E86542]">
          <span className="h-0.5 w-10 bg-[#E86542]" />
          AVM Realty India / Asset Value Management
        </div>

        {/* Headline with Deep Navy & Coral Orange */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-[clamp(2.2rem,4.8vw,4.5rem)] font-black uppercase leading-[1.02] tracking-[-0.03em] text-[#1B2A4A]"
        >
          Discover homes <br />
          <span className="text-[#E86542]">&amp; commercial spaces</span> <br />
          built for tomorrow.
        </motion.h1>

        {/* Sub-headline & Buttons */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-[#1B2A4A]/80 md:text-lg">
            We help ambitious buyers and seasoned investors discover verified <span className="font-bold text-[#1B2A4A]">Residential</span> properties, prime <span className="font-bold text-[#1B2A4A]">Commercial</span> hubs, and high-growth <span className="font-bold text-[#1B2A4A]">Plots &amp; Land</span> with complete legal due diligence and advisory.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#residential"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-[#5BA4D9] bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A] transition-all hover:bg-[#5BA4D9]/10 hover:border-[#1B2A4A]"
            >
              Explore Properties <ArrowDownRight size={15} className="text-[#5BA4D9]" />
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-sm bg-[#E86542] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:bg-[#d65533] hover:shadow-md"
            >
              Get Callback <PhoneCall size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-6 hidden w-full max-w-[1440px] items-center justify-end px-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1B2A4A]/60 lg:flex lg:px-12">
        <div className="flex items-center gap-3">
          <Mouse size={16} className="text-[#5BA4D9]" />
          <span>Scroll to explore</span>
          <span className="h-px w-12 bg-[#E2E8F0]" />
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   2. CORE SERVICES GRID (Clean White Cards & Sky Blue Accents)
   ========================================================================= */
export function CoreServices() {
  const services = [
    {
      num: '01',
      title: 'Residential\nReal Estate',
      category: 'Living Spaces',
      copy: 'Apartments, Luxury Villas, and Penthouse spaces curated for prime lifestyle, complete with end-to-end site visit support.',
      icon: Building2,
      features: ['Luxury Villas & Penthouses', 'Gated Communities', 'Personalized Site Tours'],
    },
    {
      num: '02',
      title: 'Commercial\nAssets',
      category: 'Business & Yield',
      copy: 'High-visibility Retail Shops, Grade-A Office Spaces, and pre-leased High-ROI investment opportunities with assured rental potential.',
      icon: Store,
      features: ['High-Footfall Retail Stores', 'Corporate Tech Parks', 'Assured Rental Yields'],
    },
    {
      num: '03',
      title: 'Plots &\nLand Parcels',
      category: 'Capital Appreciation',
      copy: 'Handpicked residential and commercial plots in rapid-growth infrastructure corridors, backed by 100% verified legal title checks.',
      icon: Map,
      features: ['Growth Corridor Locations', 'Clear Title Verification', 'Survey & Demarcation Support'],
    },
    {
      num: '04',
      title: 'Property Advisory\n& Home Loans',
      category: 'Consulting & Finance',
      copy: 'Complete RERA compliance audits, contract documentation, institutional market valuations, and expedited bank home loan processing.',
      icon: BadgePercent,
      features: ['RERA Due Diligence', 'Bank Loan Approvals', 'Fair Market Valuations'],
    },
  ]

  return (
    <section id="residential" className="scroll-mt-24 bg-[#ffffff] px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
              01 / What We Offer
            </p>
            <h2 className="max-w-2xl text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-4xl">
              Our Real Estate Portfolio <br />
              <span className="text-[#E86542]">&amp; Services.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#1B2A4A]/70">
            From your first dream home to multi-crore commercial portfolios, AVM Realty delivers verified options and total transactional clarity.
          </p>
        </div>

        {/* 4-Column Grid with White Cards & Light Borders */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                whileHover={{ y: -4, borderColor: '#5BA4D9', boxShadow: '0 12px 30px -10px rgba(91,164,217,0.18)' }}
                key={item.num}
                className="group flex flex-col justify-between rounded-sm border border-[#E2E8F0] bg-white p-8 transition-all min-h-[400px] shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#1B2A4A]/40">{item.num}</span>
                    <div className="grid size-11 place-items-center rounded-sm bg-[#5BA4D9]/10 text-[#5BA4D9] transition-colors group-hover:bg-[#5BA4D9] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                  </div>
                  <span className="mt-8 inline-block rounded-xs bg-[#5BA4D9]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5BA4D9]">
                    {item.category}
                  </span>
                  <h3 className="mt-3 whitespace-pre-line text-2xl font-black uppercase leading-[.98] tracking-[-0.04em] text-[#1B2A4A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-[#1B2A4A]/70">{item.copy}</p>
                </div>

                <div className="mt-8 border-t border-[#E2E8F0] pt-4">
                  <ul className="space-y-2">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-[#1B2A4A]/85">
                        <span className="size-1.5 rounded-full bg-[#E86542]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* =========================================================================
            FEATURED REAL ESTATE BUILDINGS SHOWCASE (Residential & Commercial)
           ========================================================================= */}
        <div className="mt-24 border-t border-[#E2E8F0] pt-20">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E86542]">
                Architectural Landmarks
              </p>
              <h3 className="text-3xl font-black uppercase tracking-tight text-[#1B2A4A] md:text-4xl">
                Featured Residential &amp; Commercial Developments
              </h3>
            </div>
            <p className="max-w-xs text-xs leading-5 text-[#1B2A4A]/70">
              Verified Grade-A towers, luxury villa communities, and high-footfall business hubs ready for occupancy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Residential Building Card */}
            <div className="group overflow-hidden rounded-sm border border-[#E2E8F0] bg-white shadow-sm transition-all hover:border-[#5BA4D9] hover:shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e0e0de]">
                <Image
                  src="/ace-terra.jpg"
                  alt="Ace Terra Luxury Expressway Residences"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 via-[#1B2A4A]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-xs bg-[#E86542] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                    Residential Prime
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#5BA4D9]">
                    Expressway Living &bull; Jewar Corridor
                  </p>
                  <h4 className="mt-1 text-2xl font-black uppercase tracking-tight">
                    Ace Terra
                  </h4>
                  <p className="mt-1 text-xs text-white/80">
                    3 &amp; 4 BHK Luxury Residences &bull; Olympic Pool &bull; Near Jewar Airport
                  </p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#1B2A4A]/50">Status</span>
                  <p className="text-xs font-bold text-[#1B2A4A]">RERA Approved &bull; Dec 2027</p>
                </div>
                <Link
                  href="/residential"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#F7F9FC] border border-[#E2E8F0] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1B2A4A] transition-colors hover:bg-[#5BA4D9] hover:text-white"
                >
                  View Details <ArrowUpRight size={13} className="text-[#E86542] group-hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Commercial Building Card */}
            <div className="group overflow-hidden rounded-sm border border-[#E2E8F0] bg-white shadow-sm transition-all hover:border-[#5BA4D9] hover:shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e0e0de]">
                <Image
                  src="/mall-of-noida.jpg"
                  alt="Mall of Noida High-Street Retail & Multiplex"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 via-[#1B2A4A]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-xs bg-[#5BA4D9] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                    Commercial Yield
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#E86542]">
                    High-Street Retail &amp; Multiplex
                  </p>
                  <h4 className="mt-1 text-2xl font-black uppercase tracking-tight">
                    Mall of Noida
                  </h4>
                  <p className="mt-1 text-xs text-white/80">
                    Sector 98 Expressway &bull; 6-Screen Multiplex &bull; High Footfall Boulevard
                  </p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#1B2A4A]/50">Status</span>
                  <p className="text-xs font-bold text-[#1B2A4A]">Under Construction &bull; Q4 2026</p>
                </div>
                <Link
                  href="/residential"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#F7F9FC] border border-[#E2E8F0] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1B2A4A] transition-colors hover:bg-[#5BA4D9] hover:text-white"
                >
                  View Details <ArrowUpRight size={13} className="text-[#E86542] group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   3. PROPERTY CATEGORIES / HUBS (Soft Light Blue/Gray Background #F7F9FC)
   ========================================================================= */
export function PropertyCategories() {
  const [activeTab, setActiveTab] = useState('All Properties')

  const categories = [
    {
      id: 'All Properties',
      label: 'All Properties',
      badge: 'Comprehensive Portfolio',
      headline: 'Complete Inventory Across Residential, Commercial & Plots',
      description:
        'Whether you are searching for ready-to-move apartments, pre-leased corporate retail, or strategic land parcels in emerging investment belts, our team actively curates verified properties matching your budget.',
      highlights: ['Direct developer pricing', 'Zero hidden brokerage on select projects', 'Free legal title report on request'],
    },
    {
      id: 'Residential',
      label: 'Residential',
      badge: 'Living & Comfort',
      headline: 'Apartments, Duplexes, Luxury Penthouses & Gated Villas',
      description:
        'Discover thoughtfully designed homes with world-class amenities, prime clubhouse access, excellent school connectivity, and clear possession timelines.',
      highlights: ['2, 3 & 4 BHK Luxury Apartments', 'Independent Gated Villas', 'Ready-to-Move & Under-Construction Options'],
    },
    {
      id: 'Commercial',
      label: 'Commercial',
      badge: 'High ROI & Rental Yields',
      headline: 'Retail Fronts, Grade-A Offices & High-Footfall Showrooms',
      description:
        'Secure stable rental cash flows with top corporate tenants and prominent commercial developments located on main arterial roads and business districts.',
      highlights: ['Pre-leased bank & corporate units', 'Lock-in periods with assured escalation', 'High-traffic retail boulevards'],
    },
    {
      id: 'Plots/Land',
      label: 'Plots / Land',
      badge: 'Maximum Appreciation',
      headline: 'Approved Layouts, Farm Lands & Highway Development Belts',
      description:
        'Invest in strategic land with crystal-clear non-agricultural (NA) titles, boundary demarcation, water/electricity access, and immense capital growth trajectory.',
      highlights: ['100% Clear Title Search', 'Fast-appreciating outer ring-road corridors', 'Flexible plot dimensions'],
    },
  ]

  const current = categories.find((c) => c.id === activeTab) || categories[0]

  return (
    <section id="commercial" className="scroll-mt-24 border-y border-[#E2E8F0] bg-[#F7F9FC] px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
              02 / Property Hubs
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-4xl">
              Explore By <span className="text-[#E86542]">Category.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#1B2A4A]/70">
            Browse our primary segments or connect directly for custom portfolios tailored to your city and investment horizon.
          </p>
        </div>

        {/* Filter Pills with Sky Blue Active & Subtle Outline */}
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-sm px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-all cursor-pointer ${
                  isActive
                    ? 'border-2 border-[#5BA4D9] bg-[#5BA4D9] text-white shadow-md'
                    : 'border border-[#E2E8F0] bg-white text-[#1B2A4A] hover:border-[#5BA4D9] hover:text-[#5BA4D9]'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Selected Category Content Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-sm border border-[#E2E8F0] bg-white p-8 md:p-12 shadow-sm"
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-block rounded-xs border border-[#5BA4D9]/30 bg-[#5BA4D9]/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#5BA4D9]">
                {current.badge}
              </span>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-[#1B2A4A] md:text-3xl">
                {current.headline}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#1B2A4A]/75">{current.description}</p>

              <div className="mt-6 space-y-3">
                {current.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-xs font-medium text-[#1B2A4A]">
                    <CheckCircle2 size={16} className="text-[#5BA4D9] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Concierge Box */}
            <div className="rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-sm bg-[#5BA4D9] text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#1B2A4A]">
                    WhatsApp Concierge
                  </h4>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#5BA4D9]">Handpicked Shortlists</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-[#1B2A4A]/70">
                Tell us your preferred locality, budget, and configuration. We will curate and share a verified portfolio directly on your WhatsApp with photos, layout plans, and pricing breakdown.
              </p>

              <a
                href="#lead-form"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm border-2 border-[#5BA4D9] bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1B2A4A] transition-all hover:bg-[#5BA4D9] hover:text-white"
              >
                Send My Requirement <ArrowUpRight size={14} className="text-[#E86542]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================================
   4. LEAD CAPTURE FORM SECTION (Coral Orange Primary Action)
   ========================================================================= */
export function LeadCaptureForm({
  source = 'Homepage Quick Callback Form',
  defaultLookingFor = 'Residential',
}: {
  source?: string
  defaultLookingFor?: string
}) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    lookingFor: defaultLookingFor,
    budgetRange: '₹50 Lakhs — ₹1 Crore',
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
          ...formData,
          source,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to submit inquiry')
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
    <section id="lead-form" className="bg-[#ffffff] px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          {/* Left Column: Reassurance & Authority */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
              03 / Priority Advisory
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-4xl">
              Looking to Buy, <br />
              <span className="text-[#E86542]">Sell, or Invest?</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-[#1B2A4A]/75">
              Get an instant priority callback from our senior property consultants. Whether you want to explore off-market deals or need valuation advice, we are here to assist.
            </p>

            <div className="mt-10 space-y-4 border-t border-[#E2E8F0] pt-8">
              {[
                { title: 'Zero Brokerage on Selected New Launches', desc: 'Direct developer alliances with exclusive early-bird discounts.' },
                { title: '100% Legal & RERA Verified', desc: 'Title check reports and clear documentation before any token commitment.' },
                { title: 'Home Loan Assistance', desc: 'Pre-approved sanction partnerships with leading nationalized & private banks.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="grid size-6 place-items-center rounded-full bg-[#5BA4D9]/15 text-[#5BA4D9] shrink-0 mt-0.5">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1B2A4A]">{item.title}</p>
                    <p className="text-xs text-[#1B2A4A]/65">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Capture Box */}
          <div className="rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] p-8 md:p-12 shadow-sm">
            <div className="mb-8 border-b border-[#E2E8F0] pb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E86542]">
                Quick Callback Form
              </span>
              <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                Request Handpicked Options
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-sm border border-[#5BA4D9] bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-[#5BA4D9] text-white">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-[#1B2A4A]">
                  Request Received!
                </h4>
                <p className="mt-2 text-xs leading-6 text-[#1B2A4A]/70">
                  Thank you, <span className="font-bold text-[#1B2A4A]">{formData.name || 'Investor'}</span>. Our specialist will call you at{' '}
                  <span className="font-bold text-[#E86542]">{formData.phone || 'your phone number'}</span> within 15 minutes with verified matching options.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1B2A4A] hover:border-[#5BA4D9] hover:text-[#5BA4D9]"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                      Looking For *
                    </label>
                    <select
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                      className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                    >
                      <option value="Residential">Residential (Flat / Villa)</option>
                      <option value="Commercial">Commercial (Shop / Office)</option>
                      <option value="Plot">Plots / Land Parcel</option>
                      <option value="Advisory">Investment & Loans</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A]">
                      Budget Range *
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full rounded-sm border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-all focus:border-[#5BA4D9] focus:ring-2 focus:ring-[#5BA4D9]/20"
                    >
                      <option value="Below ₹50 Lakhs">Below ₹50 Lakhs</option>
                      <option value="₹50 Lakhs — ₹1 Crore">₹50 Lakhs — ₹1 Crore</option>
                      <option value="₹1 Crore — ₹3 Crores">₹1 Crore — ₹3 Crores</option>
                      <option value="₹3 Crores — ₹10 Crores">₹3 Crores — ₹10 Crores</option>
                      <option value="₹10 Crores+">₹10 Crores+ (Ultra Luxury)</option>
                    </select>
                  </div>
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
                  <span>{loading ? 'Submitting...' : 'Get Instant Call'}</span>
                  <PhoneCall size={14} className="transition-transform group-hover:scale-110" />
                </button>

                <p className="text-center text-[10px] text-[#1B2A4A]/60">
                  🔒 Your information is confidential. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   5. FOOTER (Deep Navy Text & Soft Contrast Background #F7F9FC)
   ========================================================================= */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#E2E8F0] bg-[#F7F9FC] px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <div className="mb-6">
              <Image
                src="/avm-logo.png"
                alt="AVM Realty India Pvt Ltd"
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E86542]">
              Start a conversation
            </p>
            <h2 className="mt-4 max-w-xl text-5xl font-black uppercase leading-[.9] tracking-[-0.06em] text-[#1B2A4A] md:text-7xl">
              Make space <br />
              <span className="text-[#E86542]">for better.</span>
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 rounded-sm bg-[#E86542] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:bg-[#d65533]"
              >
                Request Callback <ArrowUpRight size={14} />
              </a>
              <a
                href="mailto:contact@avmrealty.in"
                className="inline-flex items-center gap-2 border-b border-[#5BA4D9] pb-1 text-sm font-semibold text-[#1B2A4A] transition-colors hover:text-[#5BA4D9]"
              >
                contact@avmrealty.in
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B2A4A]/50">Explore</p>
            <div className="flex flex-col gap-3 text-sm font-medium text-[#1B2A4A]/70">
              {navItems.map((n) => (
                <Link key={n.name} href={n.href} className="transition-colors hover:text-[#E86542]">
                  {n.name}
                </Link>
              ))}
              <Link href="/privacy-policy" className="transition-colors hover:text-[#E86542]">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B2A4A]/50">Services</p>
            <p className="text-sm leading-6 text-[#1B2A4A]/70">
              Residential Luxury Homes<br />
              Commercial &amp; Retail Yields<br />
              Plots &amp; Strategic Land Parcels<br />
              RERA Advisory &amp; Home Loans
            </p>
            <div className="mt-4">
              <Link href="/contact" className="text-xs font-bold text-[#5BA4D9] hover:underline">
                View all studio locations →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-[#E2E8F0] pt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#1B2A4A]/60 sm:flex-row">
          <span>© 2025 AVM Realty India Pvt Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#1B2A4A]">
              Privacy Policy
            </Link>
            <span className="text-[#5BA4D9]">Asset Value Management</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* =========================================================================
   6. SITE COMPOSITION (Homepage)
   ========================================================================= */
export function Site() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoreServices />
      <PropertyCategories />
      <LeadCaptureForm />
      <Footer />
    </>
  )
}
