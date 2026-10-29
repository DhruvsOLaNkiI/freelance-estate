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
  Clock,
  Cpu,
  Building2,
  TrendingUp,
  Sparkles,
  Zap,
  Plane,
  Car,
  Waves,
  ExternalLink,
} from 'lucide-react'
import { Navbar, Footer, LeadCaptureForm } from '@/components/modulor-site'

const filters = ['All Properties', 'Apartments', 'Villas', 'Plots & Land', 'Penthouses', 'Commercial Hubs']

const properties = [
  {
    title: 'Dholera Aurya City',
    category: 'Plots & Land',
    location: 'Dholera SIR, Ahmedabad, Gujarat',
    config: 'Residential & Commercial Plots (150 – 1,000 sq yd)',
    area: '1,350 – 9,000 sq ft',
    price: '₹18 Lakh – ₹1.2 Cr',
    possession: 'Immediate Registry',
    status: 'Govt Approved / NA',
    image: '/dholera-aurya-city.jpg',
    features: [
      'Located inside Dholera Special Investment Region (SIR) near Tata ₹91,000 Cr Semiconductor Fab',
      'Underground plug-and-play utilities: 24/7 dedicated power, potable water & automated SCADA monitoring',
      'Direct connectivity to Ahmedabad-Dholera 4-lane expressway and Dholera International Airport',
    ],
  },
  {
    title: 'Mall of Noida',
    category: 'Commercial Hubs',
    location: 'Sector 98, Noida Expressway',
    config: 'High-Street Retail, Multiplex & Anchor Spaces',
    area: '250 – 5,000 sq ft',
    price: '₹45 Lakh – ₹4.5 Cr',
    possession: 'Q4 2026',
    status: 'Under Construction',
    image: '/mall-of-noida.jpg',
    features: [
      'Premier expressway commercial retail hub with 6-screen multiplex, food court & hypermarket',
      'High footfall frontage with double-height retail shops and high visibility boulevard',
      'Assured rental return models with pre-leased corporate retail brands and clear title',
    ],
  },
  {
    title: 'Machhor Hills',
    category: 'Plots & Land',
    location: 'Almora, Uttarakhand',
    config: 'Himalayan View Estate Plots & Cottages',
    area: '2,160 – 5,400 sq ft (240 – 600 sq yd)',
    price: '₹42 Lakh – ₹1.25 Cr',
    possession: 'Immediate Registration',
    status: 'Freehold Clear Title',
    image: '/machhor-hills.jpg',
    features: [
      'Panoramic 180° snow-clad Himalayan mountain views surrounded by pristine pine & cedar forests',
      'Gated mountain enclave with paved internal roads, solar streetlights and reliable fresh water supply',
      'Perfect setting for a serene second home, luxury wooden chalet or high-demand Airbnb holiday retreat',
    ],
  },
  {
    title: 'Anantara Residences',
    category: 'Villas',
    location: 'Jim Corbett Foothills, Uttarakhand',
    config: '3 & 4 BHK Luxury Forest Villas',
    area: '2,800 – 4,500 sq ft',
    price: '₹1.85 Cr – ₹3.75 Cr',
    possession: 'Dec 2026',
    status: 'RERA Registered',
    image: '/anantara-residences.jpg',
    features: [
      'Ultra-luxury jungle retreat villas with private plunge pools, sun terraces and panoramic glass pavilions',
      'Turnkey hospitality rental pool management delivering strong annual rental yields to owners',
      'Lush biodiversity, organic orchards, yoga decks and clubhouse with heated pool and spa',
    ],
  },
  {
    title: 'Casa Corbett',
    category: 'Villas',
    location: 'Jim Corbett, Uttarakhand',
    config: 'Luxury Eco-Villas & Managed Plots',
    area: '2,250 – 4,200 sq ft',
    price: '₹1.45 Cr – ₹3.2 Cr',
    possession: 'Ready & Phased',
    status: 'Gated Township',
    image: '/casa-corbett.jpg',
    features: [
      '600+ acre river-adjoining eco-resort master plan featuring luxury club, dining and recreational trails',
      'Fully managed luxury holiday home with round-the-clock concierge, housekeeping and maintenance',
      'Pristine forest canopy, safari gateway access and clear freehold registry demarcation',
    ],
  },
  {
    title: 'Max Estates',
    category: 'Apartments',
    location: 'Sector 128, Noida Expressway',
    config: '3 & 4 BHK Ultra-Luxury Sky Homes',
    area: '2,700 – 4,600 sq ft',
    price: '₹4.8 Cr – ₹9.5 Cr',
    possession: 'Mid 2027',
    status: 'New Launch',
    image: '/max-estates.jpg',
    features: [
      'Well-being certified biophilic design with double-glazed acoustic facades and high thermal efficiency',
      'Overlooking 18-hole championship golf course with wrap-around private sundecks and panoramic vistas',
      'Private elevator lobbies, IGBC Platinum green credentials, and bespoke hospitality services',
    ],
  },
  {
    title: 'Godrej Woods',
    category: 'Apartments',
    location: 'Sector 43 / Sector 146, Noida',
    config: '3, 4 & 5 BHK Urban Forest Residences',
    area: '2,050 – 3,750 sq ft',
    price: '₹3.1 Cr – ₹6.4 Cr',
    possession: 'Phased Possession',
    status: 'Under Construction',
    image: '/godrej-woods.jpg',
    features: [
      'Iconic urban forest masterplan with 1,100+ mature trees, elevated forest trails and sky-walkways',
      'Prime Central Noida location — 5 minutes from Noida Golf Course and rapid metro connectivity',
      'Curated lifestyle clubhouse featuring infinity-edge pool, wellness spa, sports courts & EV charging hubs',
    ],
  },
  {
    title: 'Ace Terra',
    category: 'Apartments',
    location: 'Sector 22D, Yamuna Expressway',
    config: '3 & 4 BHK Expressway Residences',
    area: '1,770 – 3,025 sq ft',
    price: '₹1.75 Cr – ₹3.4 Cr',
    possession: 'Dec 2027',
    status: 'RERA Approved',
    image: '/ace-terra.jpg',
    features: [
      'Prime location along Yamuna Expressway, minutes from the upcoming Noida International Airport (Jewar)',
      'Low-density green masterplan with landscaped podium gardens, Olympic-length pool & grand clubhouse',
      'Triple-height grand entrance lobby with modern smart home automation and 24/7 multi-tier security',
    ],
  },
  {
    title: 'Gaur NYC Residences',
    category: 'Apartments',
    location: 'Sector 129, Noida Expressway & G. Noida West',
    config: '4 BHK High-Rise Condominiums',
    area: '2,500 – 3,850 sq ft',
    price: '₹2.8 Cr – ₹4.9 Cr',
    possession: 'Phase Launch',
    status: 'Premium Corridor',
    image: '/gaur-nyc.jpg',
    features: [
      'New York City inspired architecture with grand entrance boulevard and illuminated water fountains',
      'Expressway connectivity — adjacent to leading MNC tech parks, corporate campuses & metro corridors',
      'Ultra-luxurious 5-star sky lounge, temperature-controlled indoor pool, private theater and squash courts',
    ],
  },
  {
    title: 'L&T Green Reserve',
    category: 'Apartments',
    location: 'Sector 128, Noida Expressway',
    config: '3, 4 & 5 BHK Golf Residences',
    area: '2,400 – 4,800 sq ft',
    price: '₹4.2 Cr – ₹8.9 Cr',
    possession: '2028',
    status: 'Under Construction',
    image: '/lnt-green-reserve.jpg',
    features: [
      'Developed by engineering titan L&T Realty directly overlooking the Jaypee Greens championship golf course',
      'Expansive 80% open landscaped greens with zero vehicular traffic on surface level for pure serenity',
      'State-of-the-art 50,000 sq ft clubhouse facility, private tennis courts and signature interior finishes',
    ],
  },
  {
    title: 'M3M The Cullinan',
    category: 'Penthouses',
    location: 'Sector 94, Noida (South Delhi Border)',
    config: '3, 4 & 5 BHK Sky Mansions & Penthouses',
    area: '3,200 – 5,800 sq ft',
    price: '₹6.5 Cr – ₹14.5 Cr',
    possession: 'Q2 2028',
    status: 'Iconic Landmark',
    image: '/m3m-cullinan.jpg',
    features: [
      'Ultra-luxury mixed-use towers at 0 km from South Delhi with direct Kalindi Kunj metro connectivity',
      'Over 100,000 sq ft sky clubhouse, private plunge pools, panoramic glass decks and helipad provision',
      'Integrated luxury high-street retail plaza hosting international luxury brands and fine-dining pavilions',
    ],
  },
  {
    title: 'Goa Coastal Luxury Villas',
    category: 'Villas',
    location: 'North Goa (Assagao / Candolim / Anjuna)',
    config: '3, 4 & 5 BHK Private Pool Beach Villas',
    area: '3,500 – 6,200 sq ft',
    price: '₹4.5 Cr – ₹11.5 Cr',
    possession: 'Ready & Q3 2026',
    status: 'Freehold Title',
    image: '/goa-luxury-villas.jpg',
    features: [
      'Contemporary Portuguese-modern luxury estates with private crystal turquoise infinity pool & sun decks',
      'High-yielding luxury holiday rental asset managed by premium boutique hospitality operators',
      'Surrounded by lush coconut groves, minutes from North Goa’s finest beaches, clubs and gourmet cafes',
    ],
  },
  {
    title: 'Smart World The Edition',
    category: 'Apartments',
    location: 'Sector 66, Golf Course Ext Rd, Gurugram',
    config: '3.5 & 4.5 BHK Luxury Residences',
    area: '2,900 – 4,100 sq ft',
    price: '₹4.2 Cr – ₹7.2 Cr',
    possession: 'Dec 2027',
    status: 'RERA Registered',
    image: '/smart-world.jpg',
    features: [
      'Futuristic aerodynamic twin towers with expansive wrap-around curved balconies and floor-to-ceiling glass',
      '7-tier multi-level sky clubhouse with private screening lounge, heated pool, rooftop observation deck & gym',
      'Prime location on Golf Course Extension Road with seamless access to Cyber City, Rapid Metro & IGI Airport',
    ],
  },
]

const assurances = [
  {
    icon: ShieldCheck,
    title: '100% RERA & Title Verified',
    copy: 'Every listing carries a validated RERA registration, 30-year encumbrance search and clear demarcation before we present it.',
  },
  {
    icon: BadgePercent,
    title: 'Zero Hidden Brokerage',
    copy: 'Direct developer mandates mean transparent price breakups, no surprise charges and early-bird launch discounts passed to you.',
  },
  {
    icon: Clock,
    title: 'Private Site Visits',
    copy: 'Dedicated advisors arrange weekend shortlists across multiple projects in one day, with travel and appointments handled.',
  },
  {
    icon: PhoneCall,
    title: 'Loan & Registry Support',
    copy: 'Pre-approved sanction partnerships with leading banks plus end-to-end registry, stamp duty and possession documentation.',
  },
]

export default function ResidentialPage() {
  const [activeFilter, setActiveFilter] = useState('All Properties')

  const visible =
    activeFilter === 'All Properties'
      ? properties
      : properties.filter((p) => p.category === activeFilter)

  const stats = [
    { value: '2,500+', label: 'Happy Clients' },
    { value: '40+', label: 'Verified Projects' },
    { value: '100%', label: 'RERA Cleared' },
    { value: '15+', label: 'Years Advisory' },
  ]

  return (
    <>
      <Navbar activePage="residential property" />

      <main className="bg-[#ffffff] pt-[88px]">
        {/* Hero with Residential Towers Background */}
        <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#ffffff] px-6 py-20 lg:px-12 lg:py-28">
          <Image
            src="/real-estate-towers.png"
            alt="Verified luxury residential towers and gated communities"
            fill
            priority
            className="object-cover object-center opacity-65 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/95 from-5% via-[#ffffff]/60 via-45% to-transparent to-80%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/80 via-transparent to-[#ffffff]/10" />

          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E86542]">
              <span className="h-0.5 w-10 bg-[#E86542]" />
              Residential Portfolio / Verified Homes
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-[clamp(2.2rem,4.8vw,4.5rem)] font-black uppercase leading-[1.02] tracking-[-0.03em] text-[#1B2A4A]"
            >
              Verified homes <br />
              <span className="text-[#E86542]">in growth corridors.</span>
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1B2A4A]/80 md:text-lg">
              From ready-to-move <span className="font-bold text-[#1B2A4A]">3 &amp; 4 BHK residences</span> and gated villas to approved plots and private penthouse suites — every home is title-checked, RERA validated and fairly priced by our advisory desk.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#listings"
                className="inline-flex items-center gap-2 rounded-sm bg-[#E86542] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:bg-[#d65533] hover:shadow-md"
              >
                Browse Homes <ArrowUpRight size={14} />
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-[#5BA4D9] bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B2A4A] transition-all hover:bg-[#5BA4D9]/10 hover:border-[#1B2A4A]"
              >
                Get Callback <PhoneCall size={14} className="text-[#5BA4D9]" />
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
                  Homes Ready for <span className="text-[#E86542]">Shortlisting.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#1B2A4A]/70">
                Prices are indicative and revised quarterly. Share your budget to receive the full floor plan, cost breakup and developer discount sheet.
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

            {/* Property Cards */}
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
                          Possession
                        </p>
                        <p className="mt-1 text-[11px] font-bold text-[#1B2A4A]">
                          {p.possession}
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
                      Request Details <ArrowUpRight size={13} className="text-[#E86542] group-hover:text-white" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Residential Advisory Assurances */}
        <section className="border-y border-[#E2E8F0] bg-[#F7F9FC] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                  02 / The AVM Guarantee
                </p>
                <h2 className="max-w-2xl text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-4xl">
                  Why families buy their <span className="text-[#E86542]">homes with us.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#1B2A4A]/70">
                Buyer-first advisory — we recommend what fits your family and budget, not what pays the highest commission.
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

        {/* Dholera Special Investment Region (SIR) & Semiconductor Hub Showcase */}
        <section className="border-t border-[#E2E8F0] bg-[#ffffff] px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            {/* Header */}
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                  <span className="flex size-2 rounded-full bg-[#E86542] animate-pulse" />
                  National Mega Project &bull; Dholera SIR
                </div>
                <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-5xl">
                  India&apos;s First Semiconductor City <br />
                  <span className="text-[#E86542]">&amp; Smart Greenfield Hub.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#1B2A4A]/70">
                Dholera Special Investment Region (SIR) is India&apos;s largest planned smart city—anchored by the ₹91,000 Cr Tata Semiconductor Fab, international cargo airport, and high-speed expressway.
              </p>
            </div>

            {/* Main Interactive Showcase Banner */}
            <div className="grid overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F7F9FC] shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left Column: Visual with Highlights */}
              <div className="relative min-h-[380px] overflow-hidden bg-[#1B2A4A] lg:min-h-[500px]">
                <Image
                  src="/skyscrapers-towers.jpg"
                  alt="Dholera Smart City & Semiconductor Hub master development"
                  fill
                  className="object-cover object-center opacity-75 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/40 to-transparent" />
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E86542] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    <Cpu size={12} /> ₹91,000 Cr Tata Semi-Fab
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1B2A4A] shadow-md">
                    <Sparkles size={12} className="text-[#5BA4D9]" /> 920 Sq Km SIR
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#5BA4D9]">
                    Catalyst Investment Corridor &bull; Gujarat
                  </p>
                  <h3 className="mt-1 text-2xl font-black uppercase tracking-tight md:text-3xl">
                    Dholera Semiconductor &amp; Smart City
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/80 max-w-lg">
                    Strategically planned alongside the Ahmedabad-Dholera 4-lane expressway, Dedicated Freight Corridor (DMIC), and operational subterranean plug-and-play utilities.
                  </p>
                </div>
              </div>

              {/* Right Column: Strategic Project Pillars */}
              <div className="flex flex-col justify-between p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <span className="rounded-xs bg-[#5BA4D9]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5BA4D9]">
                      Project Intelligence
                    </span>
                    <h4 className="mt-2 text-xl font-black uppercase text-[#1B2A4A]">
                      Why Global Tech &amp; Investors Are Entering Dholera:
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {/* Item 1: Semiconductor Ecosystem */}
                    <div className="flex items-start gap-3.5 rounded-xl border border-[#E2E8F0] bg-white p-4 transition-colors hover:border-[#5BA4D9]">
                      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#E86542]/10 text-[#E86542]">
                        <Cpu size={20} />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-[#1B2A4A]">
                          Tata Electronics &amp; PSMC Semiconductor Fab
                        </h5>
                        <p className="mt-1 text-xs leading-5 text-[#1B2A4A]/70">
                          India&apos;s pioneering commercial AI &amp; automotive chip foundry, generating 20,000+ skilled engineering and corporate jobs.
                        </p>
                      </div>
                    </div>

                    {/* Item 2: World-Class Infrastructure */}
                    <div className="flex items-start gap-3.5 rounded-xl border border-[#E2E8F0] bg-white p-4 transition-colors hover:border-[#5BA4D9]">
                      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#5BA4D9]/10 text-[#5BA4D9]">
                        <Zap size={20} />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-[#1B2A4A]">
                          Underground Plug-and-Play Smart Utilities
                        </h5>
                        <p className="mt-1 text-xs leading-5 text-[#1B2A4A]/70">
                          Pre-laid underground fiber optics, potable recycled water, 24/7 dedicated industrial power grids, and automated SCADA monitoring.
                        </p>
                      </div>
                    </div>

                    {/* Item 3: Multimodal Connectivity */}
                    <div className="flex items-start gap-3.5 rounded-xl border border-[#E2E8F0] bg-white p-4 transition-colors hover:border-[#5BA4D9]">
                      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#1B2A4A]/10 text-[#1B2A4A]">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-[#1B2A4A]">
                          Dholera International Airport &amp; Metro Corridor
                        </h5>
                        <p className="mt-1 text-xs leading-5 text-[#1B2A4A]/70">
                          Direct 40-minute connectivity to Ahmedabad via the high-speed green expressway, container cargo freight terminals, and regional mass transit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B2A4A]/50">
                      AVM Advisory Desk
                    </span>
                    <p className="text-xs font-semibold text-[#1B2A4A]">
                      Title-checked plots &bull; Industrial &amp; Residential Zoning
                    </p>
                  </div>
                  <a
                    href="#lead-form"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#E86542] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#d65533]"
                  >
                    Inquire For Dholera <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Major Projects & Infrastructure Grid */}
            <div className="mt-16 pt-12 border-t border-[#E2E8F0]">
              <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                    <span className="size-1.5 rounded-full bg-[#E86542]" />
                    Corridor Intelligence &bull; Growth Drivers
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#1B2A4A] md:text-3xl">
                    Major Projects &amp; <span className="text-[#E86542]">Infrastructure</span>
                  </h3>
                </div>
                <p className="max-w-md text-xs leading-5 text-[#1B2A4A]/70">
                  Comprehensive multi-billion dollar master infrastructure driving exponential capital appreciation, corporate relocation, and industrial momentum.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* 1. Dholera International Airport */}
                <div className="group flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-[#F7F9FC] p-6 transition-all hover:border-[#5BA4D9] hover:bg-white hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-lg bg-[#5BA4D9]/15 text-[#5BA4D9] transition-colors group-hover:bg-[#5BA4D9] group-hover:text-white">
                        <Plane size={22} />
                      </div>
                      <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#1B2A4A]/70 border border-[#E2E8F0]">
                        Greenfield Hub
                      </span>
                    </div>

                    <a
                      href="https://www.google.com/search?kgmid=%2Fg%2F11xkp62__m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-base font-black uppercase tracking-tight text-[#1B2A4A] transition-colors hover:text-[#5BA4D9]"
                    >
                      Dholera International Airport <ExternalLink size={13} className="text-[#5BA4D9] shrink-0" />
                    </a>

                    <p className="mt-2.5 text-xs leading-5 text-[#1B2A4A]/75">
                      A massive greenfield airport project with dual runways and a cargo hub designed to boost regional logistics and international cargo freight.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E86542]">
                      Dual Runways &bull; Cargo Gateway
                    </span>
                  </div>
                </div>

                {/* 2. Ahmedabad–Dholera Expressway (NH 751) */}
                <div className="group flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-[#F7F9FC] p-6 transition-all hover:border-[#5BA4D9] hover:bg-white hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-lg bg-[#E86542]/15 text-[#E86542] transition-colors group-hover:bg-[#E86542] group-hover:text-white">
                        <Car size={22} />
                      </div>
                      <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#1B2A4A]/70 border border-[#E2E8F0]">
                        NH 751
                      </span>
                    </div>

                    <h4 className="mt-5 text-base font-black uppercase tracking-tight text-[#1B2A4A]">
                      Ahmedabad–Dholera Expressway
                    </h4>

                    <p className="mt-2.5 text-xs leading-5 text-[#1B2A4A]/75">
                      A high-speed 6-to-10-lane expressway improving direct connectivity and slashing travel time from Ahmedabad to Dholera under 45 minutes.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5BA4D9]">
                      6–10 Lanes &bull; High-Speed Access
                    </span>
                  </div>
                </div>

                {/* 3. Semiconductor & Industrial Hubs */}
                <div className="group flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-[#F7F9FC] p-6 transition-all hover:border-[#5BA4D9] hover:bg-white hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-lg bg-[#1B2A4A]/10 text-[#1B2A4A] transition-colors group-hover:bg-[#1B2A4A] group-hover:text-white">
                        <Cpu size={22} />
                      </div>
                      <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#1B2A4A]/70 border border-[#E2E8F0]">
                        ₹91,000 Cr Fab
                      </span>
                    </div>

                    <h4 className="mt-5 text-base font-black uppercase tracking-tight text-[#1B2A4A]">
                      Semiconductor &amp; Industrial Hubs
                    </h4>

                    <p className="mt-2.5 text-xs leading-5 text-[#1B2A4A]/75">
                      Features anchor industrial projects including the Tata Semiconductor Fab and the Tata-Airbus C-295 defense aircraft manufacturing facilities.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E86542]">
                      Tata Semi-Fab &bull; Airbus C-295
                    </span>
                  </div>
                </div>

                {/* 4. Urban & Residential Developments */}
                <div className="group flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-[#F7F9FC] p-6 transition-all hover:border-[#5BA4D9] hover:bg-white hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-lg bg-[#5BA4D9]/15 text-[#5BA4D9] transition-colors group-hover:bg-[#5BA4D9] group-hover:text-white">
                        <Waves size={22} />
                      </div>
                      <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#1B2A4A]/70 border border-[#E2E8F0]">
                        Smart Living
                      </span>
                    </div>

                    <h4 className="mt-5 text-base font-black uppercase tracking-tight text-[#1B2A4A]">
                      Urban &amp; Residential Developments
                    </h4>

                    <p className="mt-2.5 text-xs leading-5 text-[#1B2A4A]/75">
                      Includes planned commercial districts, high-tech IT parks, knowledge corridors, and a signature 6.5 km scenic artificial canal front.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5BA4D9]">
                      6.5 KM Canal Front &bull; IT Parks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-link to Commercial */}
        <section className="bg-[#1B2A4A] px-6 py-16 text-white lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 md:items-center md:flex-row">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                Looking for yield instead of a home?
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-[-0.04em] md:text-4xl">
                Explore Commercial Property →
              </h3>
            </div>
            <Link
              href="/commercial"
              className="inline-flex items-center gap-3 rounded-sm bg-[#E86542] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#d65533]"
            >
              Commercial Portfolio <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        {/* Callback Form */}
        <LeadCaptureForm
          source="Residential Property Page"
          defaultLookingFor="Residential"
        />
      </main>

      <Footer />
    </>
  )
}
