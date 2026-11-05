export interface ServiceItem {
  slug: string;
  index: string;
  title: string;
  shortDesc: string;
  overviewDesc: string;
  heroImage: string;
  features: string[];
  shortFeatures: string[];
  gallery: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  type: string;
  address: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  heroImage: string;
  cardImage: string;
  summary: string;
  heading: string;
  paragraphs: string[];
  scope: string[];
  gallery?: string[];
  videoTour?: {
    videoSrc: string;
    posterSrc: string;
    youtubeEmbed: string;
  };
}

export interface ReviewItem {
  name: string;
  meta: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  tag: string;
}

export const COMPANY_INFO = {
  name: "Pacific Green Homes",
  headerPhoneDisplay: "(818) 521-7750",
  headerPhoneHref: "tel:+18185217750",
  primaryPhoneDisplay: "(818) 301-5354",
  primaryPhoneHref: "tel:+18183015354",
  email: "office@pgreenhomes.com",
  address: "14723 Oxnard St, #B, Van Nuys, CA 91411",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=14723%20Oxnard%20St%2C%20%23B%2C%20Van%20Nuys%2C%20CA%2091411",
  googleReviewUrl:
    "https://www.google.com/maps/place/Pacific+Green+Homes+Inc./@34.1797013,-118.4539751,763m/data=!3m1!1e3!4m8!3m7!1s0x80c2970ab3bfc8d7:0xc300e97022b0779f!8m2!3d34.1797013!4d-118.4539751!9m1!1b1!16s%2Fg%2F11c53ngvd7?entry=ttu",
  license: "1008948",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "landscape",
    index: "01",
    title: "Landscape & Outdoor Living",
    shortDesc:
      "Artificial turf, pavers, patio covers, and outdoor spaces designed for California living and built to last with almost no upkeep.",
    overviewDesc:
      "Your yard is the first thing people see and the space you live in most. We design and build complete outdoor environments that look incredible year round and hold up to the California sun.",
    heroImage: "/images/pg-covered-outdoor-dining.jpg",
    shortFeatures: [
      "Drought friendly artificial turf that stays green all year",
      "Paver patios, walkways, and driveways",
      "Patio covers and shade structures",
      "Full landscape design and installation",
    ],
    features: [
      "Drought friendly artificial turf that stays green all year",
      "Paver patios, walkways, and driveways",
      "Patio covers and shade structures",
      "Full landscape design and installation",
      "Low water, low maintenance planting",
    ],
    gallery: [
      "/images/pg-covered-outdoor-dining.jpg",
      "/images/pg-outdoor-kitchen-turf.jpg",
      "/images/pg-landscape-lounge.jpg",
    ],
  },
  {
    slug: "concrete-hardscape",
    index: "02",
    title: "Concrete & Hardscape",
    shortDesc:
      "Poured concrete, retaining walls, and structural hardscape engineered for hillsides and built to carry real load.",
    overviewDesc:
      "Concrete is where a great outdoor project starts. We handle everything from decorative flatwork to engineered retaining walls that make steep and difficult lots usable.",
    heroImage: "/images/pg-paver-driveway-stone.jpg",
    shortFeatures: [
      "Poured foundations and slabs",
      "Engineered retaining walls for hillside lots",
      "Driveways, patios, and walkways",
      "Decorative and stamped concrete finishes",
    ],
    features: [
      "Poured foundations and slabs",
      "Engineered retaining walls for hillside lots",
      "Driveways, patios, and walkways",
      "Decorative and stamped concrete finishes",
      "Grading, excavation, and site prep",
    ],
    gallery: [
      "/images/pg-paver-driveway-stone.jpg",
      "/images/pg-paver-driveway-dusk.jpg",
      "/images/pg-stone-home-front.jpg",
    ],
  },
  {
    slug: "pools",
    index: "03",
    title: "Custom Pools & Spas",
    shortDesc:
      "In ground pools and spas built from the ground up, from steep hillside sites to level backyards.",
    overviewDesc:
      "A pool is the centerpiece of any backyard. We build custom pools and spas that fit your space and your site, including the tough hillside builds most contractors avoid.",
    heroImage: "/images/pg-pool-twilight.jpg",
    shortFeatures: [
      "Custom in ground pool design and construction",
      "Spas and water features",
      "Hillside and difficult site builds",
      "Structural shell engineering",
    ],
    features: [
      "Custom in ground pool design and construction",
      "Spas and water features",
      "Hillside and difficult site builds",
      "Structural shell engineering",
      "Pool decking and surrounding hardscape",
    ],
    gallery: [
      "/images/pg-pool-twilight.jpg",
      "/images/pg-pool-patio-day.jpg",
      "/images/pg-covered-lounge-pool.jpg",
    ],
  },
  {
    slug: "kitchen-bathroom-remodel",
    index: "04",
    title: "Kitchen & Bathroom Remodeling",
    shortDesc:
      "Full kitchen and bathroom remodels that upgrade how your home looks, works, and feels every single day.",
    overviewDesc:
      "Kitchens and bathrooms are where a remodel pays off most. We manage the full process, from layout and materials to the final finish, so the result looks custom and lasts.",
    heroImage: "/images/pg-kitchen-waterfall-island.jpg",
    shortFeatures: [
      "Complete kitchen renovations",
      "Bathroom remodels and additions",
      "Cabinetry, countertops, and tile",
      "Layout changes and space planning",
    ],
    features: [
      "Complete kitchen renovations",
      "Bathroom remodels and additions",
      "Cabinetry, countertops, and tile",
      "Layout changes and space planning",
      "Energy efficient fixtures and appliances",
    ],
    gallery: [
      "/images/pg-kitchen-waterfall-island.jpg",
      "/images/pg-spa-bathroom-tub.jpg",
      "/images/pg-living-room-open.jpg",
    ],
  },
  {
    slug: "full-house-remodel",
    index: "05",
    title: "Full House Remodels",
    shortDesc:
      "Whole home renovations and additions handled by one team, from foundation and framing to the final walkthrough.",
    overviewDesc:
      "When you want to transform an entire home, you need one team that owns the whole project. We handle full remodels and additions from the structure up, on schedule and on budget.",
    heroImage: "/images/pg-stone-home-dusk.jpg",
    shortFeatures: [
      "Whole home renovations",
      "Room additions and second stories",
      "Structural, foundation, and framing work",
      "Full project management and permitting",
    ],
    features: [
      "Whole home renovations",
      "Room additions and second stories",
      "Structural, foundation, and framing work",
      "Full project management and permitting",
      "One accountable team start to finish",
    ],
    gallery: [
      "/images/pg-stone-home-dusk.jpg",
      "/images/pg-aerial-estate-pool.jpg",
      "/images/pg-great-room-glass.jpg",
    ],
  },
  {
    slug: "energy-efficiency",
    index: "06",
    title: "Energy Efficiency Upgrades",
    shortDesc:
      "HVAC, windows, and exterior paint that cut energy bills and keep your home comfortable in every California season.",
    overviewDesc:
      "Energy efficiency is built into everything we do. The right HVAC, windows, and exterior finishes lower your bills and make your home more comfortable and more valuable.",
    heroImage: "/images/pg-steel-doors-interior.jpg",
    shortFeatures: [
      "High efficiency HVAC systems",
      "Energy efficient window replacement",
      "Exterior paint and weatherproofing",
      "Insulation and air sealing",
    ],
    features: [
      "High efficiency HVAC systems",
      "Energy efficient window replacement",
      "Exterior paint and weatherproofing",
      "Insulation and air sealing",
      "Lower monthly energy costs",
    ],
    gallery: [
      "/images/pg-steel-doors-interior.jpg",
      "/images/pg-great-room-glass.jpg",
      "/images/pg-master-suite-view.jpg",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "landale-st-studio-city",
    title: "Landale Street Residence",
    type: "Full Home Remodel",
    address: "12818 Landale St",
    city: "Studio City",
    region: "CA",
    lat: 34.1517226,
    lng: -118.4119826,
    heroImage: "/images/pg-landale-exterior.jpg",
    cardImage: "/images/pg-landale-exterior.jpg",
    summary:
      "A complete home transformation in the heart of Studio City, rebuilt for modern living and everyday energy efficiency.",
    heading: "Studio City transformation",
    paragraphs: [
      "This Studio City home was reimagined from the inside out. Pacific Green Homes handled the full scope of the project as one team, so every trade worked toward the same finished vision instead of leaving gaps between them.",
      "The remodel paired an updated, open interior with energy efficient systems throughout, from high performance windows to a modern HVAC setup, keeping the home comfortable and lowering its running costs through every California season.",
      "Outside, the property was finished with fresh exterior work and a landscape designed to match the home and hold up to the Southern California climate.",
    ],
    scope: [
      "Full interior renovation",
      "Kitchen and bathroom remodel",
      "Energy efficient windows and HVAC",
      "New exterior finishes and paint",
      "Outdoor living and landscape",
    ],
    gallery: [
      "/images/pg-landale-exterior.jpg",
      "/images/pg-landale-kitchen.jpg",
      "/images/pg-landale-pool.jpg",
    ],
  },
  {
    slug: "bloomfield-st-studio-city",
    title: "Bloomfield Street Residence",
    type: "Whole Home Transformation",
    address: "13040 Bloomfield St",
    city: "Studio City",
    region: "CA",
    lat: 34.149237,
    lng: -118.4168351,
    heroImage: "/images/pg-bloomfield-exterior.jpg",
    cardImage: "/images/pg-bloomfield-exterior.jpg",
    summary:
      "A whole home transformation in Studio City, taken from structure to finish by a single accountable team.",
    heading: "Studio City transformation",
    paragraphs: [
      "The Bloomfield Street project is a full transformation in Studio City, the kind of comprehensive build Pacific Green Homes is made for. We carried the project from the structural work through to the final finishes without handing it off between separate contractors.",
      "The result is a home that feels brand new, with custom kitchen and bathrooms, refreshed living spaces, and energy efficient upgrades built into the work rather than added on at the end.",
      "The exterior and outdoor areas were finished to match, giving the property strong curb appeal and usable outdoor living space suited to the neighborhood.",
    ],
    scope: [
      "Structural and foundation work",
      "Full interior and exterior remodel",
      "Custom kitchen and bathrooms",
      "Energy efficient upgrades",
      "Hardscape and outdoor living",
    ],
    gallery: [
      "/images/pg-bloomfield-exterior.jpg",
      "/images/pg-bloomfield-pool.jpg",
      "/images/pg-bloomfield-interior.jpg",
    ],
  },
  {
    slug: "valleyheart-dr-sherman-oaks",
    title: "Valleyheart Drive Residence",
    type: "Custom Residence",
    address: "15025 Valleyheart Dr",
    city: "Sherman Oaks",
    region: "CA",
    lat: 34.160456,
    lng: -118.4605026,
    heroImage: "/images/pg-valleyheart-thumb.jpg",
    cardImage: "/images/pg-valleyheart-thumb.jpg",
    summary:
      "A completed custom residence in Sherman Oaks, shown in a full walkthrough video tour.",
    heading: "Sherman Oaks transformation",
    paragraphs: [
      "The Valleyheart Drive residence is a completed Pacific Green Homes project in Sherman Oaks, just west of our Studio City builds in the San Fernando Valley.",
      "The full walkthrough below tours the finished home, from the interior spaces and finishes through to the exterior and outdoor areas.",
      "As with every project we take on, the work was carried by one accountable team so the details line up from the structure through to the final finish.",
    ],
    scope: [
      "Custom residential build",
      "Interior finishes and millwork",
      "Kitchen and bathrooms",
      "Exterior and curb appeal",
      "Outdoor living areas",
    ],
    videoTour: {
      videoSrc: "/valleyheart-tour.mp4",
      posterSrc: "/images/valleyheart-poster.jpg",
      youtubeEmbed:
        "https://www.youtube-nocookie.com/embed/AY0twYvBpB4?autoplay=1&mute=1&loop=1&playlist=AY0twYvBpB4&playsinline=1&rel=0&modestbranding=1",
    },
  },
];

export const WORK_GALLERY: GalleryPhoto[] = [
  {
    src: "/images/pg-aerial-estate-pool.jpg",
    alt: "Aerial view of a completed estate with pool and landscaped grounds",
    tag: "Aerial",
  },
  {
    src: "/images/pg-home-front-dusk.jpg",
    alt: "Custom home exterior lit at dusk with landscaped entry",
    tag: "Exteriors",
  },
  {
    src: "/images/pg-kitchen-waterfall-island.jpg",
    alt: "Modern kitchen with waterfall marble island and wood cabinetry",
    tag: "Kitchens",
  },
  {
    src: "/images/pg-pool-twilight.jpg",
    alt: "Custom pool and covered patio glowing at twilight",
    tag: "Pools",
  },
  {
    src: "/images/pg-covered-outdoor-dining.jpg",
    alt: "Covered outdoor dining area opening to a pool",
    tag: "Outdoor Living",
  },
  {
    src: "/images/pg-master-bedroom-fireplace.jpg",
    alt: "Primary bedroom with fireplace and floor to ceiling windows",
    tag: "Interiors",
  },
  {
    src: "/images/pg-paver-driveway-stone.jpg",
    alt: "Paver driveway leading to a stone clad custom home",
    tag: "Hardscape",
  },
  {
    src: "/images/pg-spa-bathroom-tub.jpg",
    alt: "Spa style bathroom with freestanding soaking tub",
    tag: "Bathrooms",
  },
  {
    src: "/images/pg-stone-home-dusk.jpg",
    alt: "Stone clad custom home lit at dusk",
    tag: "Exteriors",
  },
  {
    src: "/images/pg-living-room-open.jpg",
    alt: "Open plan living room with floor to ceiling glass",
    tag: "Interiors",
  },
  {
    src: "/images/pg-outdoor-kitchen-turf.jpg",
    alt: "Outdoor kitchen and bar with artificial turf lawn",
    tag: "Outdoor Living",
  },
  {
    src: "/images/pg-aerial-luxury-pools.jpg",
    alt: "Aerial view of a luxury home with pool and lush lawn",
    tag: "Aerial",
  },
  {
    src: "/images/pg-great-room-glass.jpg",
    alt: "Great room with vaulted ceiling and walls of glass",
    tag: "Interiors",
  },
  {
    src: "/images/pg-pool-patio-day.jpg",
    alt: "Backyard pool and patio on a sunny day",
    tag: "Pools",
  },
  {
    src: "/images/pg-home-theater.jpg",
    alt: "Custom home theater with tiered seating",
    tag: "Interiors",
  },
  {
    src: "/images/pg-landscape-lounge.jpg",
    alt: "Landscaped outdoor lounge with planters and hedging",
    tag: "Landscape",
  },
  {
    src: "/images/pg-walk-in-closet.jpg",
    alt: "Custom walk in closet with island and built in storage",
    tag: "Interiors",
  },
  {
    src: "/images/pg-paver-driveway-dusk.jpg",
    alt: "Paver driveway and stone home lit at dusk",
    tag: "Hardscape",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    name: "Michael Dastan",
    meta: "Google Review · 3 weeks ago",
    quote:
      "Asher did an amazing job on my landscaping, pavers, artificial turf, and plants. The quality of the work was excellent, the project was completed on time, and the entire process was smooth and professional. My yard looks incredible, and I highly recommend Asher and Sean to anyone looking for quality outdoor work.",
  },
  {
    name: "Dekel Biton",
    meta: "Google Review · 1 week ago",
    quote:
      "I couldn't be happier with David from Pacific Green Homes. They completely remodeled our home, including the interior, exterior, landscaping, and roof, and everything turned out even better than we expected. The team was professional throughout.",
  },
  {
    name: "Shlomi Shalom",
    meta: "Google Review · 1 week ago",
    quote:
      "I had an excellent experience with this company from start to finish. The team was professional, honest, and communicated with me throughout the entire project. The quality of the work exceeded my expectations.",
  },
  {
    name: "Gabriel Shikhman",
    meta: "Google Review · 3 weeks ago",
    quote:
      "Great experience from start to finish. The team did an excellent job breaking and removing the concrete, worked quickly and professionally, and left the area clean and organized. They were reliable, easy to communicate with, and completed everything as promised. Highly recommended.",
  },
  {
    name: "Jim Lione",
    meta: "Google Review · Local Guide",
    quote:
      "Asher and his incredible team were fantastic from beginning to end of our three room remodel this spring. He accommodated our needs for expansion, creativity, financial concerns, our pets, and especially my health. Truly above and beyond.",
  },
  {
    name: "Danny Beltran",
    meta: "Google Review · Local Guide",
    quote:
      "Asher is so talented at what he does, his vision is truly extraordinary. The whole process to do our kitchen was an amazing transformation.",
  },
  {
    name: "Myriam Embon",
    meta: "Google Review · Local Guide",
    quote:
      "Amazing experience remodeling my kitchen with a great team. Asher is very knowledgeable and had great ideas to share with us. The job was perfectly done and finished on time.",
  },
  {
    name: "Milan Hansen",
    meta: "Google Review · Local Guide",
    quote:
      "1000 out of 10 for Pacific Green Homes. Asher, Carmel, and the whole team are so nice and very efficient. They did a huge job for my home and I couldn't be any happier. Highly recommend.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What areas of California do you serve?",
    answer:
      "We serve homeowners across California. If you are planning a landscape, remodel, or energy efficiency project, reach out and we will confirm that your location is within our service area.",
  },
  {
    question: "Do you handle both landscaping and full home remodels?",
    answer:
      "Yes. Pacific Green Homes covers the full range of home improvement, from artificial turf, pavers, concrete, and pools to kitchen and bathroom remodels, full house renovations, HVAC, windows, and exterior paint.",
  },
  {
    question: "What makes your builds energy efficient?",
    answer:
      "Energy efficiency is built into every project. We focus on high efficiency HVAC, energy efficient windows, proper insulation and air sealing, and exterior finishes that keep your home comfortable and lower your monthly energy bills.",
  },
  {
    question: "Can you build on a hillside or difficult lot?",
    answer:
      "Yes. Hillside and difficult sites are a specialty. We build engineered retaining walls, foundations, and pool shells designed for steep and challenging California terrain.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. Every project starts with a free, no obligation consultation so you can understand your options and get a transparent quote before you commit to anything.",
  },
];
