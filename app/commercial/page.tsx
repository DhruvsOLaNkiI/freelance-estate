'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  PhoneCall,
  BadgePercent,
  TrendingUp,
} from 'lucide-react'
import { Navbar, Footer, LeadCaptureForm } from '@/components/modulor-site'

const filters = ['All Properties', 'Offices', 'Retail', 'Pre-Leased', 'Industrial']

const properties = [
  {
    title: 'Vertex Horizon Business Hub',
    category: 'Offices',
    location: 'Cyber City, Gurugram',
    config: 'Grade-A Office Floors',
    area: '1,800 – 12,000 sq ft',
    price: '₹12,500 / sq ft',
    returnRate: '8.4% Pre-Leased ROI',
    status: 'Pre-Leased 8.4% ROI',
    image: '/project-02.png',
    features: [
      'Anchor IT tenant on a 9-year lease with 15% biennial escalation',
      'IGBC Gold core-shell, 100% power backup and 8 passenger lifts',
      'Metro station access with 1,200 covered parking bays',
    ],
  },
  {
    title: 'Techpark Commons',
    category: 'Offices',
    location: 'Whitefield, Bengaluru',
    config: 'Managed Office Campus',
    area: '12,000 sq ft onwards',
    price: '₹9,800 / sq ft',
    returnRate: '92% Occupancy',
    status: 'Fully Managed Campus',
    image: '/project-03.png',
    features: [
      'Plug-and-play workstations, café and 24×7 facility management',
      'Campus-style landscaped courtyards with EV charging bays',
      'Flexible 3–9 year lease structures with fitted-out options',
    ],
  },
  {
    title: 'Signature High-Street Retail',
    category: 'Retail',
    location: 'Andheri West, Mumbai',
    config: 'Retail Showrooms & Kiosks',
    area: '450 – 2,400 sq ft',
    price: '₹28,000 / sq ft',
    returnRate: '6.5% Leased Yield',
    status: 'Ready to Occupy',
    image: '/real-estate-towers.png',
    features: [
      'Ground and first-floor frontage on a 40 ft arterial road',
      'Footfall from 1,400+ tower residences plus a cinema anchor',
      'Double-height shops with individual metering and signage rights',
    ],
  },
  {
    title: 'Meridian Corporate Tower',
    category: 'Pre-Leased',
    location: 'HITEC City, Hyderabad',
    config: 'Pre-Leased Office Floors',
    area: '6,500 sq ft per floor',
    price: '₹11,200 / sq ft',
    returnRate: '7.9% Assured',
    status: 'Under Construction',
    image: '/project-04.png',
    features: [
      'Floor-wise lease locked in before handover possession',
      'Escalation-linked rental deed with bank guarantee backing',
      'Possession Q4 2027 with construction-linked payment plan',
    ],
  },
  {
    title: 'Anchor Bank & Showroom Units',
    category: 'Pre-Leased',
    location: 'Nagar Road, Pune',
    config: 'Bank Branch + Anchor Showroom',
    area: '3,200 sq ft',
    price: '₹42,000 / sq ft',
    returnRate: '9.1% Yield',
    status: 'Fully Leased / 9.1%',
    image: '/project-02.png',
    features: [
      'Nationalized bank branch on a 9-year lock-in with rental escalation',
      'Corner unit with dedicated parking and unobstructed frontage',
      'Rent paid quarterly in advance with corporate guarantor',
    ],
  },
  {
    title: 'Integral Logistics Park',
    category: 'Industrial',
    location: 'Bhiwandi, NCR',
    config: 'Warehouse & Industrial Sheds',
    area: '25,000 – 80,000 sq ft',
    price: '₹4,800 / sq ft',
    returnRate: 'Grade-A Park',
    status: 'Phase 1 Ready',
    image: '/hero-steel.png',
    features: [
      '12 m clear height, FM-2 flooring and 60 ft truck courts',
      'Pre-leased to a 3PL logistics operator with escrowed rentals',
      'Fire-compliant ESFR sprinklers with DG and solar rooftop',
    ],
  },
]

const assurances = [
  {
    icon: TrendingUp,
    title: 'Assured Yield Structuring',
    copy: 'We underwrite rental cash flows, escalation clauses and lock-in terms so your net yield survives occupancy and interest-rate cycles.',
  },
  {
    icon: ShieldCheck,
    title: 'Tenant & Lease Diligence',
    copy: 'Covenant strength, security deposit, rental deed registration and guarantor checks on every pre-leased asset before allocation.',
  },
  {
    icon: BadgePercent,
    title: 'Yield vs Capital Strategy',
    copy: 'Clear guidance on whether a high-street shop, Grade-A floor or logistics shed suits your horizon: rental income or appreciation.',
  },
  {
    icon: PhoneCall,
    title: 'Exit & Resale Support',
    copy: 'Buyback and resale desk with tenant-linked valuation reports so your commercial asset stays liquid when you want to exit.',
  },
]

export default function CommercialPage() {
  const [activeFilter, setActiveFilter] = useState('All Properties')

  const visible =
    activeFilter === 'All Properties'
      ? properties
      : properties.filter((p) => p.category === activeFilter)

  const stats = [
    { value: '8.4%', label: 'Avg. Pre-Leased Yield' },
    { value: '35+', label: 'Active Commercial Assets' },
    { value: '₹1,200 Cr+', label: 'Assets Advised' },
    { value: '100%', label: 'Title Verified' },
  ]

  return (
    <>
      <Navbar activePage="commercial property" />

      <main className="bg-[#ffffff] pt-[88px]">
        {/* Hero with Commercial Building Background */}
        <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#ffffff] px-6 py-20 lg:px-12 lg:py-28">
          <Image
            src="/project-02.png"
            alt="Grade-A commercial buildings, retail boulevards and logistics parks"
            fill
            priority
            className="object-cover object-center opacity-65 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/95 from-5% via-[#ffffff]/60 via-45% to-transparent to-80%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/80 via-transparent to-[#ffffff]/10" />

          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E86542]">
              <span className="h-0.5 w-10 bg-[#E86542]" />
              Commercial Portfolio / Yield &amp; Occupancy
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-[clamp(2.2rem,4.8vw,4.5rem)] font-black uppercase leading-[1.02] tracking-[-0.03em] text-[#1B2A4A]"
            >
              Commercial assets <br />
              <span className="text-[#E86542]">built for steady yield.</span>
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1B2A4A]/80 md:text-lg">
              Grade-A <span className="font-bold text-[#1B2A4A]">office floors</span>, high-footfall <span className="font-bold text-[#1B2A4A]">retail boulevards</span>, bank-grade <span className="font-bold text-[#1B2A4A]">pre-leased units</span> and logistics parks — underwritten for occupancy, escalation and a clean title file.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#listings"
                className="inline-flex items-center gap-2 rounded-sm bg-[#E86542] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:bg-[#d65533] hover:shadow-md"
              >
                Browse Assets <ArrowUpRight size={14} />
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-[#5BA4D9] bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A] transition-all hover:bg-[#5BA4D9]/10 hover:border-[#1B2A4A]"
              >
                Request Yield Sheet <PhoneCall size={14} className="text-[#5BA4D9]" />
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-[#E2E8F0] pt-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black tracking-tight text-[#E86542] md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A]/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Listings Grid with Category Filters */}
        <section id="listings" className="scroll-mt-24 px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                  01 / Current Inventory
                </p>
                <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-4xl">
                  Assets Open for <span className="text-[#E86542]">Investment.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#1B2A4A]/70">
                Yield figures are net of maintenance and before tax. Share your ticket size to receive lease copies, tenant financials and cost breakups.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`cursor-pointer rounded-sm px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                    activeFilter === f
                      ? 'border-2 border-[#5BA4D9] bg-[#5BA4D9] text-white shadow-md'
                      : 'border border-[#E2E8F0] bg-white text-[#1B2A4A] hover:border-[#5BA4D9] hover:text-[#5BA4D9]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Asset Cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, idx) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group flex flex-col overflow-hidden rounded-sm border border-[#E2E8F0] bg-white shadow-sm transition-all hover:border-[#5BA4D9] hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e0e0de]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 via-[#1B2A4A]/25 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-xs bg-[#E86542] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                      {p.status}
                    </span>
                    <span className="absolute right-4 top-4 rounded-xs border border-white/30 bg-[#1B2A4A]/70 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {p.category}
                    </span>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#5BA4D9]">
                        <MapPin size={12} /> {p.location}
                      </p>
                      <h3 className="mt-1.5 text-2xl font-black uppercase tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80">{p.config}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="grid grid-cols-3 divide-x divide-[#E2E8F0] border-b border-[#E2E8F0] pb-4 text-center">
                      <div className="px-2">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-[#1B2A4A]/50">
                          Area
                        </p>
                        <p className="mt-1 text-[11px] font-bold text-[#1B2A4A]">{p.area}</p>
                      </div>
                      <div className="px-2">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-[#1B2A4A]/50">
                          Price
                        </p>
                        <p className="mt-1 text-[11px] font-bold text-[#E86542]">{p.price}</p>
                      </div>
                      <div className="px-2">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-[#1B2A4A]/50">
                          Yield
                        </p>
                        <p className="mt-1 text-[11px] font-bold text-[#1B2A4A]">
                          {p.returnRate}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 flex-1 space-y-2">
                      {p.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-xs leading-5 text-[#1B2A4A]/80"
                        >
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#5BA4D9]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#lead-form"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1B2A4A] transition-colors hover:bg-[#5BA4D9] hover:text-white"
                    >
                      Request Yield Sheet <ArrowUpRight size={13} className="text-[#E86542] group-hover:text-white" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Advisory Assurances */}
        <section className="border-y border-[#E2E8F0] bg-[#F7F9FC] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                  02 / Investment Discipline
                </p>
                <h2 className="max-w-2xl text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-4xl">
                  Yield that survives <span className="text-[#E86542]">the fine print.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#1B2A4A]/70">
                We audit the lease before the asset — because a commercial property is only as good as its tenant and paperwork.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {assurances.map((a, i) => {
                const Icon = a.icon
                return (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex flex-col rounded-sm border border-[#E2E8F0] bg-white p-8 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#1B2A4A]/40">
                        0{i + 1}
                      </span>
                      <div className="grid size-11 place-items-center rounded-sm bg-[#5BA4D9]/10 text-[#5BA4D9]">
                        <Icon size={22} />
                      </div>
                    </div>
                    <h3 className="mt-8 text-lg font-black uppercase leading-snug tracking-tight text-[#1B2A4A]">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-[#1B2A4A]/70">{a.copy}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Verified Project */}
        <section className="bg-[#ffffff] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <Link
              href="/projects/foundry-commons"
              className="group grid overflow-hidden rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] shadow-sm transition-all hover:border-[#5BA4D9] hover:shadow-md lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e0e0de] lg:aspect-auto lg:min-h-[340px]">
                <Image
                  src="/project-02.png"
                  alt="Foundry Commons verified commercial project"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-xs bg-[#E86542] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  Verified Project
                </span>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                  <span className="h-0.5 w-10 bg-[#5BA4D9]" />
                  Case Study / Commercial
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-[#1B2A4A] md:text-4xl">
                  Foundry Commons<span className="text-[#E86542]">.</span>
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#1B2A4A]/75">
                  A 28,500 sq ft historic foundry re-imagined as creative workspace: 380 workstations, LEED Platinum and WELL Gold certified, retrofitted with a self-supporting modular steel structure that never loads the heritage brick envelope.
                </p>
                <div className="mt-6 flex flex-wrap gap-6 text-xs text-[#1B2A4A]/70">
                  <span className="font-bold text-[#1B2A4A]">28,500 sq ft</span>
                  <span className="font-bold text-[#1B2A4A]">LEED Platinum</span>
                  <span className="font-bold text-[#E86542]">58% Embodied Carbon Avoided</span>
                </div>
                <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-[#E86542] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all group-hover:bg-[#d65533]">
                  View Project Breakdown <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Cross-link to Residential */}
        <section className="bg-[#1B2A4A] px-6 py-16 text-white lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 md:items-center md:flex-row">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                Buying a home instead of an asset?
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-[-0.04em] md:text-4xl">
                Explore Residential Property →
              </h3>
            </div>
            <Link
              href="/residential"
              className="inline-flex items-center gap-3 rounded-sm bg-[#E86542] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#d65533]"
            >
              Residential Portfolio <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        {/* Callback Form */}
        <LeadCaptureForm
          source="Commercial Property Page"
          defaultLookingFor="Commercial"
        />
      </main>

      <Footer />
    </>
  )
}
