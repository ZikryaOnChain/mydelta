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
    id: "roof-maintenance",
    title: "Roof Soft Wash",
    description: "Prevent harmful moss build up before it leads to costly damages. Our gentle de-mossing and decontamination process is tried and true.",
    image: "/images/services/roof-softwash.jpg",
    features: ["Safe and effective cleaning", "Extends roof life", "Removes harmful growth"],
    benefits: [
      {
        title: "Prevent Damage",
        description: "Our soft wash method safely removes harmful substances that can damage your roof over time."
      },
      {
        title: "Improve Appearance",
        description: "Restore your roof's original look and enhance your home's curb appeal."
      },
      {
        title: "Prevent Damage",
        description: "Regular maintenance prevents expensive repairs and extends the life of your roof."
      }
    ],
    pricing: {
      from: 749,
      unit: "per service"
    }
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Cleaning your gutters isn't just a hassle it's dangerous too, leave it to the pros. Protect your home from water damage.",
    image: "/images/services/gutter-cleaning.jpg",
    features: ["Complete debris removal", "Downspout cleaning", "Gutter inspection"],
    benefits: [
      {
        title: "Prevent Water Damage",
        description: "Clean gutters protect your home from water damage and foundation issues."
      },
      {
        title: "Maintain Functionality",
        description: "Regular cleaning ensures your gutters work effectively year-round."
      },
      {
        title: "Protect Investment",
        description: "Well-maintained gutters help prevent costly repairs to your home."
      }
    ],
    pricing: {
      from: 199,
      unit: "per service"
    }
  },
  {
    id: "house-washing",
    title: "House Washing",
    description: "Refresh your home top to bottom. Our expert team will have your home looking like new in no time.",
    image: "/images/services/siding-cleaning.jpg",
    features: ["Soft wash technique", "Safe for all surfaces", "Complete exterior cleaning"],
    benefits: [
      {
        title: "Extend House Life",
        description: "Regular cleaning helps protect your home's exterior surfaces from damage."
      },
      {
        title: "Enhanced Curb Appeal",
        description: "Restore your home's appearance and maintain its value."
      },
      {
        title: "Complete House Make Over",
        description: "Soffits, Sidings fascia boards and everything else"
      }
    ],
    pricing: {
      from: 499,
      unit: "per service"
    }
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    description: "Revitalize your outdoor spaces this spring with a professional pressure wash.",
    image: "/images/services/pressure-washing.jpg",
    features: ["Say goodbye to winter grime", "Prevent Slipping", "Stain removal"],
    benefits: [
      {
        title: "Restore Surfaces",
        description: "Remove years of built-up dirt, grime, and stains."
      },
      {
        title: "Prevent Damage",
        description: "Regular cleaning prevents deterioration and extends surface life."
      },
      {
        title: "Improve Safety",
        description: "Remove slippery substances and reduce fall hazards."
      }
    ],
    pricing: {
      from: 249,
      unit: "per service"
    }
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description: "Professional window cleaning service for crystal clear views and enhanced home appearance.",
    image: "/images/services/window-cleaning.jpg",
    features: ["Streak free shine", "Screen cleaning", "Track cleaning"],
    benefits: [
      {
        title: "Crystal Clear Views",
        description: "Enjoy spotless windows and improved natural light."
      },
      {
        title: "Professional Results",
        description: "Expert cleaning techniques for streak-free windows."
      },
      {
        title: "Complete Service",
        description: "Includes frames, tracks, and screens for a thorough clean."
      }
    ],
    pricing: {
      from: 199,
      unit: "per service"
    }
  },
  {
    id: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    description: "Specialized cleaning service to maintain your solar panels' efficiency and performance.",
    image: "/images/services/solar-panel-cleaning.jpg",
    features: ["Performance optimization", "Safe cleaning methods", "Regular maintenance"],
    benefits: [
      {
        title: "Maximize Efficiency",
        description: "Clean panels produce more energy and better performance."
      },
      {
        title: "Protect Investment",
        description: "Regular maintenance extends the life of your solar system."
      },
      {
        title: "Professional Care",
        description: "Safe and effective cleaning methods for delicate panels."
      }
    ],
    pricing: {
      from: 199,
      unit: "per service"
    }
  }
]; 