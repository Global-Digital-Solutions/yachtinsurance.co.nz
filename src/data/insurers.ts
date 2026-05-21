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
      "Specialist marine insurer serving NZ boat owners across a wide range of vessel types, from trailered runabouts to offshore yachts. Mariner offers a solid range of vessel-specific policies including charter and construction cover, and is locally owned and operated.",
    features: [
      "Locally owned and operated",
      "Specialist marine underwriters",
      "Blue water cover to South Pacific",
      "Charter and construction insurance",
      "Online quote available",
      "Strong customer review history",
    ],
    rating: 4.7,
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
      "Recreational marine insurer offering cover for a broad range of vessel types including yachts, jet skis, runabouts, and cruisers. NMI policies are written in plain English and online quotes are available for standard vessels.",
    features: [
      "Plain English policy wording",
      "Online quotes for standard vessels",
      "Covers houseboats and liveaboards",
      "Personal watercraft included",
      "Agreed value policies",
      "Online claims submission",
    ],
    rating: 4.5,
    minPremium: "$350 p.a.",
    specialties: [
      "Recreational boats",
      "Personal watercraft",
      "Houseboats & liveaboards",
      "Standard vessel types",
    ],
  },
  {
    name: "Tower Insurance",
    description:
      "Major NZ insurer offering recreational boat cover for yachts, launches, and jet skis. Tower policies include social yacht racing and optional lay-up cover for winter storage. One of several large general insurers active in the marine space.",
    features: [
      "Social yacht racing cover included",
      "Optional lay-up cover",
      "3-year new-for-old option",
      "$5M third-party liability",
      "Online quote and management",
      "Multi-policy discount available",
    ],
    rating: 4.3,
    minPremium: "$380 p.a.",
    specialties: [
      "Yachts & trailer sailers",
      "Launches & cruisers",
      "Jet skis & PWC",
      "Recreational vessels",
    ],
  },
  {
    name: "AMI",
    description:
      "General insurer offering recreational boat cover as part of a broader household and vehicle product suite. AMI policies cover most vessel types and include social yacht racing and offshore cover up to 200nm. Best suited to owners wanting to bundle with existing AMI policies.",
    features: [
      "200nm offshore coverage",
      "Social yacht racing cover (25nm)",
      "$5M third-party property liability",
      "Multi-policy bundling option",
      "Online quote available",
      "Straightforward claims process",
    ],
    rating: 4.2,
    minPremium: "$360 p.a.",
    specialties: [
      "Standard vessel types",
      "Offshore up to 200nm",
      "Social yacht racing",
      "Bundle with home/auto",
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
