'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ShieldCheck, Compass, Users2, Building2, Target, Eye } from 'lucide-react'
import { Navbar, Footer } from '@/components/modulor-site'

const stats = [
  { value: '15+', label: 'Years in Real Estate' },
  { value: '2,500+', label: 'Delighted Property Owners' },
  { value: '100%', label: 'RERA & Legal Verified' },
  { value: '₹1,200 Cr+', label: 'Asset Transactions Advised' },
]

const values = [
  {
    num: '01',
    title: 'Absolute Title Transparency',
    copy: 'Rigorous legal title documentation, encumbrance verification, and RERA compliance before recommending any property.',
    icon: ShieldCheck,
  },
  {
    num: '02',
    title: 'High-Growth Corridors',
    copy: 'Data-driven locality research identifying metro corridors, infrastructure expansions, and upcoming commercial hubs.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'End-to-End Client Advocacy',
    copy: 'From personalized private site visits and price negotiations to registry and home loan sanctioning.',
    icon: Users2,
  },
  {
    num: '04',
    title: 'Institutional Yield Advisory',
    copy: 'Structuring high-ROI pre-leased commercial assets and strategic land parcels for discerning family offices and investors.',
    icon: Building2,
  },
]

const leadership = [
  {
    name: 'Abhishek Sarkari',
    role: 'CEO & FOUNDER',
    bio: 'Over two decades spearheading high-value land acquisitions and premier luxury residential developments across India.',
    initials: 'AS',
  },
  {
    name: 'Pooja Singhania',
    role: 'Head of Commercial Investments',
    bio: 'Specialist in Grade-A office leasing, corporate retail spaces, and pre-leased high-yield commercial assets.',
    initials: 'PS',
  },
  {
    name: 'Rajesh K. Verma',
    role: 'Chief Legal & Compliance Counsel',
    bio: 'Veteran property law expert overseeing land demarcation, title clearance, and RERA documentation audit.',
    initials: 'RV',
  },
  {
    name: 'Sneha Deshmukh',
    role: 'VP of Residential Advisory',
    bio: 'Dedicated client advocate assisting families and HNIs in identifying luxury penthouses, villas, and premium gated estates.',
    initials: 'SD',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="about" />

      <main className="bg-[#ffffff] pt-[88px]">        {/* About Us — Simple Intro */}
        <section className="border-b border-[#E2E8F0] bg-[#F7F9FC] px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                  <span className="h-0.5 w-10 bg-[#5BA4D9]" />
                  About Us
                </div>

                <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2rem,3.6vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.01em] text-[#1B2A4A]">
                  Real estate advice that puts{' '}
                  <span className="italic text-[#E86542]">transparency</span> first.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#1B2A4A]/75 md:text-xl">
                  AVM Realty India Pvt Ltd (Asset Value Management) was founded on an unwavering commitment: to bring transparency, legal rigor, and unmatched market insight to property buyers, homeowners, and real estate investors.
                </p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm lg:aspect-[4/4.2]">
                <Image
                  src="/real-estate-towers.png"
                  alt="AVM Realty residential towers"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B2A4A]/85 via-[#1B2A4A]/30 to-transparent p-6 pt-14">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E86542]">
                    Since 2010
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Verified homes &amp; prime commercial assets across India
                  </p>
                </div>
              </div>
            </div>

            {/* Key stats */}
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-[#E2E8F0] pt-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black tracking-tight text-[#E86542] md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1B2A4A]/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Purpose */}
        <section className="px-6 py-24 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">Our Philosophy</p>
                <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-5xl">
                  Asset Value Management Built On Fiduciary Integrity.
                </h2>
                <div className="mt-8 space-y-5 text-sm leading-7 text-[#1B2A4A]/75">
                  <p>
                    Purchasing real estate is often one of the largest financial decisions a family or enterprise ever undertakes. Yet, buyers are frequently confronted with ambiguous paperwork, volatile pricing, and uncertain possession timelines.
                  </p>
                  <p>
                    At AVM Realty, we function as your dedicated client advocate. We verify legal land titles, audit RERA approvals, evaluate future infrastructural development, and negotiate directly with reputable developers to ensure you invest with complete peace of mind.
                  </p>
                </div>

                <div className="mt-10 border-l-4 border-[#E86542] pl-6 bg-[#F7F9FC] py-4 rounded-r-sm">
                  <p className="text-base italic font-medium text-[#1B2A4A]">
                    &ldquo;Real estate advisory is not about selling square footage; it is about protecting and compounding your hard-earned wealth.&rdquo;
                  </p>
                  <span className="mt-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#5BA4D9]">
                    — Abhishek Sarkari, CEO & FOUNDER
                  </span>
                </div>
              </div>

              {/* Visual Quality Guarantee Box */}
              <div className="rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] p-8 md:p-12 shadow-sm">
                <div className="mb-6 flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B2A4A]/60">
                    Verification Standard
                  </span>
                  <span className="font-mono text-xs font-bold text-[#5BA4D9]">100% RERA &amp; Title Cleared</span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#e5e5e3]">
                  <Image
                    src="/skyscrapers-towers.jpg"
                    alt="Luxury architectural skyscrapers and residential towers"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E86542]">
                      AVM Realty Benchmark
                    </p>
                    <p className="text-sm font-semibold">Strict 5-Tier Due Diligence Audit &bull; High-Rise Corridors</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    'Government land revenue search and 30-year non-encumbrance verification',
                    'RERA registration validation and promoter delivery track record',
                    'Zero hidden brokerage policy on direct developer launch mandates',
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-xs text-[#1B2A4A]/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#5BA4D9]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars / Values Grid */}
        <section className="border-y border-[#E2E8F0] bg-[#F7F9FC] px-6 py-24 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">Core Principles</p>
                <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-5xl">
                  Engineered for<br />uncompromising trust.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#1B2A4A]/70">
                How AVM Realty delivers exceptional property discovery with total transactional integrity.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <motion.div
                    whileHover={{ y: -4, borderColor: '#5BA4D9' }}
                    key={v.num}
                    className="flex flex-col justify-between rounded-sm border border-[#E2E8F0] bg-white p-8 transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#1B2A4A]/40">{v.num}</span>
                        <div className="grid size-11 place-items-center rounded-sm bg-[#5BA4D9]/10 text-[#5BA4D9]">
                          <Icon size={22} />
                        </div>
                      </div>
                      <h3 className="mt-8 text-xl font-black uppercase leading-snug tracking-tight text-[#1B2A4A]">
                        {v.title}
                      </h3>
                      <p className="mt-3 text-xs leading-6 text-[#1B2A4A]/70">{v.copy}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team — Executive Showcase matching reference cards */}
        <section className="bg-[#FAF9F5] px-6 py-24 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1440px]">
            {/* Header matching reference: EXECUTIVE | Our Leaders */}
            <div className="mb-14 flex items-center justify-between border-b border-[#E2E8F0] pb-6">
              <div className="flex items-center gap-4">
                <span className="rounded-xs bg-[#E86542]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E86542]">
                  EXECUTIVE
                </span>
                <span className="h-4 w-px bg-[#E2E8F0]" />
                <h2 className="text-3xl font-serif font-bold text-[#1B2A4A] md:text-4xl">
                  Leadership &amp; Purpose
                </h2>
              </div>
            </div>

            {/* Leadership & Mission / Vision Grid */}
            <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-stretch items-center">
              {/* Left Side: Owner / Leader Card (Pop-Out, Clean Without Pill Badge) */}
              <div className="group relative w-full rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_-12px_rgba(27,42,74,0.16),0_0_0_1px_rgba(232,101,66,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-15px_rgba(27,42,74,0.22),0_0_0_2px_rgba(232,101,66,0.3)]">
                {/* Photo with rounded-xl */}
                <div className="relative aspect-[4/4.4] w-full overflow-hidden rounded-xl bg-[#ECEAE4]">
                  <Image
                    src="/leader-01.jpg"
                    alt="Abhishek Sarkari - CEO & FOUNDER"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Card Details */}
                <div className="px-3 pt-4 pb-2">
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1B2A4A]">
                    Abhishek Sarkari
                  </h3>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E86542]">
                    CEO & FOUNDER
                  </p>
                  <p className="mt-3 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/75">
                    Over two decades of excellence in real estate consultancy and strategic land acquisitions, specializing in high-value commercial and residential portfolios.
                  </p>

                  {/* Owner Signature Bar */}
                  <div className="mt-4 border-t border-[#E8E6DF] pt-3">
                    <div className="flex items-center justify-between">
                      <div className="relative h-11 w-28">
                        <Image
                          src="/owner-signature.png"
                          alt="Abhishek Sarkari Signature"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#1B2A4A]/40">
                        Authorized Signatory
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Unified Mission & Vision in Single Card with Sky Blue Background */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#5BA4D9]/30 bg-gradient-to-br from-[#EBF5FB] via-[#F0F8FF] to-[#E3F2FD] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(91,164,217,0.22),0_0_0_1px_rgba(91,164,217,0.25)] transition-all duration-300">
                {/* Subtle Architectural Accent Top Stripe */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#5BA4D9] via-[#3B82F6] to-[#E86542]" />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-[#5BA4D9]/20 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xs bg-[#5BA4D9]/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1B2A4A]">
                      Organizational Blueprint
                    </span>
                    <span className="h-3 w-px bg-[#5BA4D9]/40" />
                    <span className="text-xs font-serif italic text-[#1B2A4A]/70">
                      AVM Realty India Pvt Ltd
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5BA4D9]">
                    <span className="size-1.5 rounded-full bg-[#5BA4D9] animate-pulse" />
                    Core Mandate
                  </div>
                </div>

                {/* Mission & Vision Sections Container */}
                <div className="my-6 grid gap-8 md:gap-7">
                  {/* Part 1: Our Mission */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg bg-white shadow-xs text-[#5BA4D9] border border-[#5BA4D9]/20">
                        <Target size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                          Core Purpose
                        </span>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                          Our Mission
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-[15px] leading-relaxed text-[#1B2A4A]/85 pl-1">
                      To empower property buyers, homeowners, and institutional investors with absolute title transparency, fiduciary advisory, and rigorous due diligence—transforming complex real estate decisions into seamless, wealth-generating milestones.
                    </p>
                  </div>

                  {/* Elegant Divider */}
                  <div className="relative flex items-center">
                    <div className="flex-grow border-t border-[#5BA4D9]/25" />
                    <span className="mx-4 shrink text-[9px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]/60">
                      Guided by Integrity &bull; Driven by Growth
                    </span>
                    <div className="flex-grow border-t border-[#5BA4D9]/25" />
                  </div>

                  {/* Part 2: Our Vision */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg bg-white shadow-xs text-[#E86542] border border-[#E86542]/20">
                        <Eye size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E86542]">
                          Long-Term Horizon
                        </span>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                          Our Vision
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-[15px] leading-relaxed text-[#1B2A4A]/85 pl-1">
                      To be the nation’s most trusted real estate advisory brand, renowned for setting the gold standard in transactional ethics, institutional research, and client-first asset management across India’s highest-growth corridors.
                    </p>
                  </div>
                </div>

                {/* Bottom Trust Tags */}
                <div className="flex flex-wrap items-center gap-2.5 border-t border-[#5BA4D9]/20 pt-5">
                  {[
                    '100% RERA Diligence',
                    'Zero Hidden Fees',
                    'Fiduciary Client Advocacy',
                    'National Footprint',
                    'Generational Wealth',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/90 border border-[#5BA4D9]/30 px-3.5 py-1 text-[11px] font-semibold text-[#1B2A4A] shadow-xs"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section — Advisory & Leadership Showcase */}
        <section className="border-t border-[#E2E8F0] bg-[#ffffff] px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            {/* Header: TEAM | Advisory Leadership */}
            <div className="mb-14 flex items-center justify-between border-b border-[#E2E8F0] pb-6">
              <div className="flex items-center gap-4">
                <span className="rounded-xs bg-[#5BA4D9]/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#5BA4D9]">
                  OUR TEAM
                </span>
                <span className="h-4 w-px bg-[#E2E8F0]" />
                <h2 className="text-3xl font-serif font-bold text-[#1B2A4A] md:text-4xl">
                  Leadership &amp; Advisory Team
                </h2>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl">
              {/* Prateek Rastogi Card */}
              <div className="group overflow-hidden rounded-2xl border border-[#E8E6DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5BA4D9]/40">
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#ECEAE4]">
                  <Image
                    src="/prateek-rastogi.jpg"
                    alt="Prateek Rastogi"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                    Prateek Rastogi
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E86542]">
                    PRESIDENT SALES
                  </p>
                  <p className="mt-4 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/70">
                    Extensive expertise in prime residential portfolios, strategic client investments, and orchestrating verified high-growth real estate acquisitions.
                  </p>
                </div>
              </div>

              {/* Abhey Abrol Card — Temporarily hidden */}
              {/*
              <div className="group overflow-hidden rounded-2xl border border-[#E8E6DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5BA4D9]/40">
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#ECEAE4]">
                  <Image
                    src="/abhey-abrol.jpg"
                    alt="Abhey Abrol"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                    Abhey Abrol
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E86542]">
                    Vice President &bull; Sales
                  </p>
                  <p className="mt-4 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/70">
                    Drives residential and commercial sales across key corridors, guiding clients from first shortlist to final registry with clear, honest advisory at every step.
                  </p>
                </div>
              </div>
              */}

              {/* Atul Kashyap Card */}
              <div className="group overflow-hidden rounded-2xl border border-[#E8E6DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5BA4D9]/40">
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#ECEAE4]">
                  <Image
                    src="/atul-kashyap.jpg"
                    alt="Atul Kashyap"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                    Atul Kashyap
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E86542]">
                    Vice President &bull; Sales
                  </p>
                  <p className="mt-4 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/70">
                    Accomplished leadership in commercial and luxury residential sales, cultivating developer relationships and ensuring superior transactional advisory for investors.
                  </p>
                </div>
              </div>

              {/* Brijesh Lal Srivastava Card */}
              <div className="group overflow-hidden rounded-2xl border border-[#E8E6DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5BA4D9]/40">
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#ECEAE4]">
                  <Image
                    src="/brijesh-lal-srivastava.jpg"
                    alt="Brijesh Lal Srivastava"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                    Brijesh Lal Srivastava
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E86542]">
                    VICE PRESIDENT OF SALES
                  </p>
                  <p className="mt-4 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/70">
                    Accomplished leadership spearheading commercial and residential sales strategies, fostering institutional client relations and delivering seamless property transactions.
                  </p>
                </div>
              </div>

              {/* Amit Chaudhary Card */}
              <div className="group overflow-hidden rounded-2xl border border-[#E8E6DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5BA4D9]/40">
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#ECEAE4]">
                  <Image
                    src="/amit-chaudhary.jpg"
                    alt="Amit Chaudhary"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                    Amit Chaudhary
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E86542]">
                    Assistant Vice President &bull; Sales
                  </p>
                  <p className="mt-4 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/70">
                    Specializes in high-velocity client mandates, property matching, and end-to-end sales execution across prime investment belts.
                  </p>
                </div>
              </div>

              {/* Mahima Lohkna Card */}
              <div className="group overflow-hidden rounded-2xl border border-[#E8E6DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5BA4D9]/40">
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#ECEAE4]">
                  <Image
                    src="/mahima-lohkna.png"
                    alt="Mahima Lohkna"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                    Mahima Lohkna
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E86542]">
                    GENERAL MANAGER OF SALES
                  </p>
                  <p className="mt-4 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/70">
                    Oversees core commercial and luxury residential sales portfolios, streamlining client mandates, and ensuring exceptional end-to-end advisory service.
                  </p>
                </div>
              </div>

              {/* Pulkit Card */}
              <div className="group overflow-hidden rounded-2xl border border-[#E8E6DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5BA4D9]/40">
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#ECEAE4]">
                  <Image
                    src="/pulkit.jpg"
                    alt="Pulkit"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1B2A4A]">
                    Pulkit
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E86542]">
                    CRM Head
                  </p>
                  <p className="mt-4 text-xs font-serif italic leading-relaxed text-[#1B2A4A]/70">
                    Spearheads client relationship management, documentation support, and post-sales engagement to ensure an effortless ownership transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Banner */}
        <section className="bg-[#1B2A4A] px-6 py-20 text-white lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">Collaborate With Us</p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight tracking-[-0.04em] md:text-5xl">
                Ready to find the right property?
              </h3>
            </div>
            <Link
              href="/#lead-form"
              className="inline-flex items-center gap-3 rounded-sm bg-[#E86542] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:bg-[#d65533]"
            >
              Get Handpicked Options <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
