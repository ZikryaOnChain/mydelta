export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  benefits: {
    title: string;
    description: string;
  }[];
  pricing: {
    from: number;
    unit: string;
  };
}

export const services: Service[] = [
  {
    id: "roof-softwash",
    title: "Roof Softwash",
    description: "Safe and effective low-pressure cleaning system that removes algae, moss, and black streaks from your roof.",
    features: [
      "Eco-friendly cleaning solutions",
      "No pressure damage to shingles",
      "Extends roof lifespan",
      "Improves curb appeal",
    ],
    image: "/images/services/roof-softwash.jpg",
    benefits: [
      {
        title: "Protect Your Investment",
        description: "Prevent costly roof damage and extend its life",
      },
      {
        title: "Improve Energy Efficiency",
        description: "Remove heat-absorbing dark spots and algae",
      },
      {
        title: "Safe Application",
        description: "No risk of damage to shingles or roof structure",
      },
    ],
    pricing: {
      from: 299,
      unit: "per service",
    },
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Professional gutter cleaning to prevent water damage and maintain your home's integrity.",
    features: [
      "Complete debris removal",
      "Downspout cleaning",
      "Gutter flow testing",
      "Minor repairs if needed",
    ],
    image: "/images/services/gutter-cleaning.jpg",
    benefits: [
      {
        title: "Prevent Water Damage",
        description: "Protect your home's foundation and walls from water overflow",
      },
      {
        title: "Extend Gutter Life",
        description: "Regular maintenance extends the lifespan of your gutters",
      },
      {
        title: "Pest Prevention",
        description: "Eliminate breeding grounds for pests and mosquitos",
      },
    ],
    pricing: {
      from: 199,
      unit: "per service",
    },
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    description: "High-quality pressure washing services for driveways, patios, and walkways.",
    features: [
      "Surface appropriate pressure",
      "Stain removal",
      "Concrete cleaning",
      "Deck & fence cleaning",
    ],
    image: "/images/services/pressure-washing.jpg",
    benefits: [
      {
        title: "Restore Surfaces",
        description: "Remove years of dirt, grime, and stains",
      },
      {
        title: "Prevent Damage",
        description: "Stop mold and mildew from deteriorating surfaces",
      },
      {
        title: "Increase Property Value",
        description: "Improve curb appeal with clean surfaces",
      },
    ],
    pricing: {
      from: 249,
      unit: "per service",
    },
  },
  {
    id: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    description: "Maximize your solar investment with professional panel cleaning services.",
    features: [
      "Increase energy efficiency",
      "Specialized cleaning solutions",
      "Performance testing",
      "Regular maintenance plans",
    ],
    image: "/images/services/solar-panel-cleaning.jpg",
    benefits: [
      {
        title: "Maximize Output",
        description: "Improve energy production by up to 30%",
      },
      {
        title: "Protect Warranty",
        description: "Maintain manufacturer warranty requirements",
      },
      {
        title: "Expert Care",
        description: "Safe cleaning by trained professionals",
      },
    ],
    pricing: {
      from: 179,
      unit: "per service",
    },
  },
  {
    id: "siding-cleaning",
    title: "Siding Cleaning",
    description: "Restore your home's exterior with our professional siding cleaning service.",
    features: [
      "Soft wash technique",
      "Mold & mildew removal",
      "All siding types",
      "Protective treatment",
    ],
    image: "/images/services/siding-cleaning.jpg",
    benefits: [
      {
        title: "Extend Siding Life",
        description: "Prevent permanent staining and damage",
      },
      {
        title: "Beautiful Results",
        description: "Restore your home's original appearance",
      },
      {
        title: "Complete Protection",
        description: "Treatment that prevents quick resoiling",
      },
    ],
    pricing: {
      from: 269,
      unit: "per service",
    },
  },
]; 