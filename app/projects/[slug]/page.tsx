import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react'
import { Navbar, Footer } from '@/components/modulor-site'
import { projectsData, getProjectBySlug } from '@/lib/projects'

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const project = getProjectBySlug(resolvedParams.slug)

  if (!project) {
    notFound()
  }

  // Find other projects for recommendation
  const otherProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <>
      <Navbar activePage="services" />

      <main className="bg-[#ffffff] pt-[88px]">
        {/* Breadcrumb Navigation Bar */}
        <section className="border-b border-[#E2E8F0] bg-[#F7F9FC] px-6 py-6 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between text-xs font-bold uppercase tracking-[0.16em]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#5BA4D9] transition-colors hover:text-[#E86542]"
            >
              <ArrowLeft size={14} /> Back to Real Estate Hub
            </Link>
            <div className="hidden items-center gap-3 sm:flex">
              <span className="text-[#1B2A4A]/50 font-medium">Category:</span>
              <span className="rounded-xs border border-[#5BA4D9]/30 bg-[#5BA4D9]/10 px-2.5 py-1 text-[#5BA4D9]">
                {project.type}
              </span>
            </div>
          </div>
        </section>

        {/* Project Hero Header */}
        <section className="border-b border-[#E2E8F0] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
              <span className="h-0.5 w-10 bg-[#5BA4D9]" />
              Verified Portfolio Asset / {project.year}
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div>
                <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[.92] tracking-[-0.05em] text-[#1B2A4A]">
                  {project.name}
                  <span className="text-[#E86542]">.</span>
                </h1>
                <p className="mt-4 text-xl font-normal text-[#1B2A4A]/75 md:text-2xl">{project.headline}</p>
              </div>

              {/* Status & Key Metrics Badge */}
              <div className="rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] p-6 lg:ml-auto lg:w-full shadow-xs">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B2A4A]/60">Status</span>
                  <span className="font-mono text-xs font-bold text-[#E86542]">{project.status}</span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-[#1B2A4A]/80">
                  <div className="flex justify-between">
                    <span className="text-[#1B2A4A]/50">Location</span>
                    <span className="font-bold text-[#1B2A4A]">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1B2A4A]/50">Scale / Footprint</span>
                    <span className="font-bold text-[#1B2A4A]">{project.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1B2A4A]/50">Delivery Timeline</span>
                    <span className="font-bold text-[#5BA4D9]">{project.siteAssemblyTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Showcase Image */}
        <section className="px-6 py-10 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#e0e0de]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E86542]">Verified Masterplan</p>
                  <p className="text-sm font-bold text-white">{project.structuralSystem}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/30 bg-[#1B2A4A]/80 px-3 py-1.5 font-mono text-[10px] uppercase text-white backdrop-blur-md">
                  <Leaf size={12} className="text-[#5BA4D9]" /> {project.embodiedCarbonReduction}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative & Structural Specs */}
        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
              {/* Left Column: Narrative & Highlights */}
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                  Property Insight
                </p>
                <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#1B2A4A] md:text-4xl">
                  Curated Quality &amp; High-Growth Trajectory.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#1B2A4A]/80 md:text-lg">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-12">
                  <h3 className="text-sm font-black uppercase tracking-[0.18em] text-[#1B2A4A]">
                    Key Property Attributes &amp; Assurances
                  </h3>
                  <div className="mt-6 space-y-4">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-4 rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] p-4">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#E86542]" />
                        <span className="text-xs leading-5 text-[#1B2A4A] font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Gallery */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                  {project.gallery.slice(1).map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e0e0de]">
                      <Image
                        src={img}
                        alt={`${project.name} gallery image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Technical Specification Table */}
              <div className="space-y-8">
                <div className="rounded-sm border border-[#E2E8F0] bg-[#F7F9FC] p-8 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">
                      Specifications
                    </span>
                    <span className="font-mono text-xs font-bold text-[#E86542]">RERA Certified</span>
                  </div>

                  <div className="mt-6 divide-y divide-[#E2E8F0]">
                    <div className="py-3">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#1B2A4A]/50">Promoter / Developer</p>
                      <p className="mt-0.5 text-xs font-bold text-[#1B2A4A]">{project.client}</p>
                    </div>
                    <div className="py-3">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#1B2A4A]/50">Advisory Lead</p>
                      <p className="mt-0.5 text-xs font-bold text-[#1B2A4A]">{project.architecturalLead}</p>
                    </div>
                    <div className="py-3">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#1B2A4A]/50">Possession / Status</p>
                      <p className="mt-0.5 text-xs font-bold text-[#1B2A4A]">{project.fabricationTime}</p>
                    </div>
                    <div className="py-3">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#1B2A4A]/50">Typology Class</p>
                      <p className="mt-0.5 text-xs font-bold text-[#1B2A4A]">{project.structuralSystem}</p>
                    </div>

                    {project.specs.map((item, idx) => (
                      <div key={idx} className="py-3">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[#1B2A4A]/50">{item.label}</p>
                        <p className="mt-0.5 text-xs font-bold text-[#1B2A4A]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquiry Box */}
                <div className="rounded-sm border border-[#E2E8F0] bg-white p-8 shadow-xs">
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#1B2A4A]">
                    Interested in this Asset?
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#1B2A4A]/70">
                    Our advisors will share floor layouts, pricing breakups, and arrange private priority site visits.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-[#E86542] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:bg-[#d65533]"
                  >
                    Request Brochure &amp; Pricing <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects / Properties */}
        <section className="border-t border-[#E2E8F0] bg-[#F7F9FC] px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5BA4D9]">Portfolio</p>
                <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-[#1B2A4A]">
                  Explore Other Verified Hubs
                </h3>
              </div>
              <Link
                href="/#services"
                className="hidden text-xs font-bold uppercase tracking-[0.16em] text-[#5BA4D9] hover:text-[#E86542] sm:block"
              >
                View All Categories →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group block rounded-sm border border-[#E2E8F0] bg-white transition-all hover:border-[#5BA4D9] hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-sm bg-[#e0e0de]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E86542]">{item.type}</p>
                    <h4 className="mt-1 text-xl font-black uppercase tracking-tight text-[#1B2A4A] group-hover:text-[#5BA4D9]">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs text-[#1B2A4A]/60">{item.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
