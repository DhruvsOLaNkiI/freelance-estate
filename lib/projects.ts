export interface Project {
  slug: string
  name: string
  type: string
  location: string
  year: string
  area: string
  status: string
  image: string
  gallery: string[]
  headline: string
  description: string
  client: string
  architecturalLead: string
  structuralSystem: string
  fabricationTime: string
  siteAssemblyTime: string
  embodiedCarbonReduction: string
  specs: { label: string; value: string }[]
  highlights: string[]
}

export const projectsData: Project[] = [
  {
    slug: 'northline-house',
    name: 'Northline House',
    type: 'Residential',
    location: 'Alberta, CA',
    year: '2024',
    area: '4,200 sq ft',
    status: 'Completed',
    image: '/real-estate-towers.png',
    gallery: ['/skyscrapers-towers.jpg', '/real-estate-towers.png', '/project-02.png'],
    headline: 'Sub-Zero Thermal Envelope Meets Cantilevered Precision Steel',
    description:
      'Engineered for extreme sub-alpine climates in Alberta, Northline House showcases off-site modular assembly capable of withstanding heavy snowloads and -40°C temperature swings. The entire steel chassis with triple-glazed thermal breaks was erected on-site in just 4 days.',
    client: 'Private Alpine Estate',
    architecturalLead: 'Elena Rostova',
    structuralSystem: 'M// Heavy Box Steel Framing with Aerogel Thermal Isolation',
    fabricationTime: '6 Weeks (Robotic Cell Vancouver)',
    siteAssemblyTime: '4 Days On-Site',
    embodiedCarbonReduction: '42% lower vs cast-in-place concrete',
    specs: [
      { label: 'Total Footprint', value: '4,200 sq ft across 3 cantilevered modules' },
      { label: 'Seismic Zone', value: 'Category C (High Alpine)' },
      { label: 'Thermal Performance', value: 'R-48 Wall Assembly / R-65 Roof' },
      { label: 'Steel Grade', value: 'ASTM A500 Grade C Recycled High-Strength Steel' },
      { label: 'Finish System', value: 'Charred Accoya + Anodized Black Zinc' },
    ],
    highlights: [
      'Pre-installed radiant hydronic floor loops inside factory cassettes',
      'Integrated solar micro-inverters pre-wired in roof steel modules',
      'Dry-interlock seismic pins eliminating hot-work permits on site',
      'Air tightness rating achieved 0.42 ACH50 (Passive House standard compliant)',
    ],
  },
  {
    slug: 'foundry-commons',
    name: 'Foundry Commons',
    type: 'Commercial',
    location: 'Portland, OR',
    year: '2023',
    area: '28,500 sq ft',
    status: 'Completed',
    image: '/project-02.png',
    gallery: ['/project-02.png', '/hero-steel.png', '/project-03.png'],
    headline: 'Adaptive Industrial Re-imagination with Modular Core Modules',
    description:
      'Transforming an early 20th-century foundry district parcel into modern creative workspace. Modulor inserted 18 modular volumetric steel bays, creating multi-tier mezzanines, acoustic focus hubs, and lightwells without loading the historic masonry exterior.',
    client: 'Urban Foundry Development Group',
    architecturalLead: 'Marcus Vance',
    structuralSystem: 'Lightweight M// Exoskeleton Frame with Composite Floor Decks',
    fabricationTime: '10 Weeks Off-site',
    siteAssemblyTime: '12 Days Delivery',
    embodiedCarbonReduction: '58% embodied carbon avoided via retrofit integration',
    specs: [
      { label: 'Total Area', value: '28,500 sq ft over 3 open-plan levels' },
      { label: 'Occupancy', value: '380 Workstations + Civic Exhibition Atrium' },
      { label: 'Certifications', value: 'LEED Platinum Certified & WELL Gold' },
      { label: 'Acoustics', value: 'STC 58 Between Modular Meeting Pods' },
      { label: 'Structural Nodes', value: 'Zero-Weld Precision Interlock Pins' },
    ],
    highlights: [
      'Self-supporting internal modular structure independent of brick envelope',
      'Complete pre-installed MEP risers tested prior to transportation',
      'Custom blackened steel detailing harmonizing with industrial heritage',
      'Delivered in phased night deliveries to avoid downtown transit disruption',
    ],
  },
  {
    slug: 'mori-campus',
    name: 'Mori Campus',
    type: 'Institutional',
    location: 'Osaka, JP',
    year: '2024',
    area: '52,000 sq ft',
    status: 'Completed',
    image: '/project-03.png',
    gallery: ['/project-03.png', '/project-01.png', '/hero-steel.png'],
    headline: 'Next-Generation Research Labs Built with Japanese Seismic Standards',
    description:
      'Designed for an advanced materials research institute outside Osaka, Mori Campus requires extreme vibration damping and stringent seismic resilience (Shindo 7 rating). Modulor developed tuned mass damper nodes integrated directly inside the hollow section columns.',
    client: 'Kansai Advanced Research Institute',
    architecturalLead: 'Dr. Kenji Sato',
    structuralSystem: 'Damped Steel Space-Frame with Robotic Moment Connections',
    fabricationTime: '14 Weeks Off-site',
    siteAssemblyTime: '18 Days Erection',
    embodiedCarbonReduction: '38% vs traditional Japanese commercial cast steel',
    specs: [
      { label: 'Scale', value: '52,000 sq ft Laboratory & Lecture Complex' },
      { label: 'Seismic Rating', value: 'JMA Shindo 7 Resilient Dampers' },
      { label: 'Vibration Class', value: 'VC-E (Sensitive Laser Microscopy Standard)' },
      { label: 'Cleanroom Modules', value: 'Class 1000 Cleanroom Pre-certified' },
      { label: 'Envelope System', value: 'Ceramic composite cladding + Triple Glazing' },
    ],
    highlights: [
      'Laboratory services, gas feeds, and scrubbers factory-commissioned',
      'Modular cleanrooms fully sterilized and sealed during overseas freight',
      'Parametric sunshade louvers manufactured by robotic stamping',
      'Rapid deployment allowed academic semester startup 5 months ahead of schedule',
    ],
  },
  {
    slug: 'vertical-08',
    name: 'Vertical 08',
    type: 'High-Rise',
    location: 'Singapore',
    year: '2025',
    area: '84,000 sq ft',
    status: 'In Progress / Final Phase',
    image: '/project-04.png',
    gallery: ['/project-04.png', '/project-02.png', '/hero-steel.png'],
    headline: 'High-Density Tropical Modular High-Rise with Bio-Climatic Skycourts',
    description:
      'A groundbreaking 16-storey mixed-use modular steel tower engineered for Singapore’s tropical humidity and rapid urban density. Prefabricated steel volumetric pods incorporate pre-grown vertical planters, automated rainwater recycling cassettes, and breezy breezeways.',
    client: 'Pan-Pacific Sustainable Living Corp',
    architecturalLead: 'Sarah Lindqvist & Elena Rostova',
    structuralSystem: 'M// Hybrid Mega-Frame with Volumetric Steel Pod Infill',
    fabricationTime: '16 Weeks Off-site',
    siteAssemblyTime: '24 Working Days per 4 Floors',
    embodiedCarbonReduction: '64% less site waste and 50% crane time reduction',
    specs: [
      { label: 'Height', value: '16 Storeys (68 meters)' },
      { label: 'Floor Space', value: '84,000 sq ft across residential & co-working' },
      { label: 'BCA Green Mark', value: 'Green Mark Platinum Super Low Energy (SLE)' },
      { label: 'Ventilation', value: 'Passive cross-ventilation corridor modules' },
      { label: 'Acoustics', value: 'Impact insulation rating IIC 62' },
    ],
    highlights: [
      'Prefabricated sky garden modules complete with irrigation plumbing',
      'PPVC certified under Singapore Building and Construction Authority standards',
      'Integrated solar photovoltaic facades generating 35% of common power',
      'Dry hook connections requiring no wet concrete curing on site',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug)
}
