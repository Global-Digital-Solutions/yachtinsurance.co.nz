export interface Insurer {
  name: string;
  description: string;
  features: string[];
  rating: number;
  minPremium: string;
  specialties: string[];
  featured?: boolean;
  badge?: string;
}

export const insurers: Insurer[] = [
  {
    name: "Keane",
    description:
      "Family-run specialist marine underwriters offering cover for virtually any vessel on any waters, anywhere in the world. Keane is renowned for exceptional personal service, broad worldwide coverage, and flexible policies that others won't write — making them the go-to choice for serious boat owners.",
    features: [
      "Any boat, any waters, any use",
      "Worldwide cruising coverage",
      "Hull and machinery protection",
      "Third-party liability included",
      "Liveaboard protection available",
      "Personal effects & navigation equipment",
      "Salvage and wreck removal",
      "Storm and extreme weather protection",
    ],
    rating: 4.9,
    minPremium: "Competitively priced",
    specialties: [
      "Any vessel type",
      "Worldwide coverage",
      "Liveaboard policies",
      "Complex & specialist risks",
    ],
    featured: true,
    badge: "HIGHLY RATED",
  },
  {
    name: "Mariner",
    description:
      "NZ's most-reviewed marine insurer with a 96% 'Excellent' rating from 2,000+ verified Trustpilot reviews. Locally owned and operated, Mariner has served Kiwi boat owners for over a decade with specialist cover for all vessel types — from trailered boats to blue water yachts, charter and construction insurance.",
    features: [
      "96% Excellent on Trustpilot (2,000+ reviews)",
      "Locally owned and operated",
      "Specialist marine underwriters",
      "Blue water cover to South Pacific",
      "Charter and construction insurance",
      "Online quote and instant cover",
    ],
    rating: 4.8,
    minPremium: "$400 p.a.",
    specialties: [
      "Trailer boats",
      "Sailing yachts",
      "Blue water offshore",
      "Charter vessels",
    ],
  },
  {
    name: "Nautilus Marine Insurance (NMI)",
    description:
      "Plain English policies for all types of recreational boat insurance. NMI (Nautilus Marine Insurance) provides comprehensive cover for yachts, jet skis, runabouts, cruisers and houseboats with instant online quotes and a specialist magazine for the boating community.",
    features: [
      "Plain English policy wording",
      "Instant online quotes",
      "Covers houseboats and liveaboards",
      "Personal watercraft specialist",
      "Agreed value policies",
      "Online claims submission",
    ],
    rating: 4.6,
    minPremium: "$350 p.a.",
    specialties: [
      "Recreational boats",
      "Personal watercraft",
      "Houseboats & liveaboards",
      "Online self-service",
    ],
  },
  {
    name: "Tower Insurance",
    description:
      "Coastguard NZ's recommended boat insurer. Tower offers comprehensive boat cover with social yacht racing included, 3-year new-for-old replacement and optional lay-up cover for winter storage. WriteMark™ approved plain-English policy wording and $5M marina liability as standard.",
    features: [
      "Coastguard NZ recommended insurer",
      "Social yacht racing cover included",
      "3-year new-for-old replacement",
      "Optional lay-up cover (reduced premium)",
      "$5M marina liability included",
      "WriteMark™ approved plain-English policy",
    ],
    rating: 4.5,
    minPremium: "$380 p.a.",
    specialties: [
      "Yachts & trailer sailers",
      "Launches & cruisers",
      "Jet skis & PWC",
      "Social racing cover",
    ],
  },
  {
    name: "AMI",
    description:
      "Backed by an AA financial strength rating, AMI covers your boat up to 200 nautical miles offshore with no excess on claims under $1,000. Social yacht racing cover up to 25nm is included as standard, with $5M liability for property damage and $1M for personal injury.",
    features: [
      "AA financial strength rating",
      "200nm offshore coverage",
      "No excess on claims under $1,000",
      "Social yacht racing cover (25nm)",
      "$5M third-party property liability",
      "New boat replacement (2 years from new)",
    ],
    rating: 4.4,
    minPremium: "$360 p.a.",
    specialties: [
      "All vessel types",
      "Offshore cruising (200nm)",
      "Social yacht racing",
      "Family boating",
    ],
  },
  {
    name: "Gallagher",
    description:
      "International insurance broker with extensive marine expertise in the NZ market. Gallagher specializes in complex marine risks and provides personalized insurance solutions.",
    features: [
      "Expert broker advice",
      "Commercial vessel coverage",
      "Charter boat insurance",
      "Agreed value options",
      "International claims support",
      "Bespoke policy design",
    ],
    rating: 4.7,
    minPremium: "$500 p.a.",
    specialties: [
      "Commercial vessels",
      "Charter boats",
      "Large yachts",
      "Complex risks",
    ],
  },
  {
    name: "Baileys Insurance",
    description:
      "Family-owned marine insurance specialist with deep knowledge of New Zealand boating. Baileys provides personal service and expert advice for all marine insurance needs.",
    features: [
      "Personal service",
      "Local expertise",
      "Agreed value marine",
      "Salvage rights",
      "Cover for all conditions",
      "Responsive claims team",
    ],
    rating: 4.5,
    minPremium: "$420 p.a.",
    specialties: [
      "Yacht insurance",
      "Classic boats",
      "High-value vessels",
      "Specialist covers",
    ],
  },
  {
    name: "NZI",
    description:
      "Major NZ insurance provider offering comprehensive marine coverage. NZI provides reliable yacht and boat insurance with strong claims support and competitive pricing.",
    features: [
      "Broad coverage options",
      "Accidental damage available",
      "Third-party liability",
      "Quick claim settlement",
      "Online adjustments",
      "Bundle discounts available",
    ],
    rating: 4.3,
    minPremium: "$370 p.a.",
    specialties: [
      "All vessel types",
      "Motor yachts",
      "Cruising boats",
      "Standard coverage",
    ],
  },
  {
    name: "Star Insurance",
    description:
      "Dedicated yacht insurance specialist focusing on quality cover and competitive premiums. Star offers comprehensive policies with expert support and flexible claim options.",
    features: [
      "Yacht specialist focus",
      "Sailing-specific covers",
      "Agreed value policies",
      "No excess offshore",
      "Racing yacht options",
      "Premium financing available",
    ],
    rating: 4.6,
    minPremium: "$450 p.a.",
    specialties: [
      "Sailing yachts",
      "Racing vessels",
      "Offshore coverage",
      "Cruising insurance",
    ],
  },
];
