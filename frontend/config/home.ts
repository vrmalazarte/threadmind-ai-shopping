export const homeConfig = {
  hero: {
    badge: "AI-Powered Fashion",
    title: "Discover your next outfit with AI.",
    description:
      "ThreadMind combines semantic search, personalized recommendations, and intelligent outfit generation to help you find clothing that matches your style.",
    primaryAction: {
      label: "Start Shopping",
      href: "/products",
    },
    secondaryAction: {
      label: "Try AI Stylist",
      href: "/ai",
    },
  },

  aiCapabilities: [
    {
      title: "Semantic Search",
      description:
        "Search naturally using phrases like 'black oversized hoodie for rainy weather'.",
    },
    {
      title: "Personalized Recommendations",
      description: "Receive clothing suggestions based on your preferences and shopping history.",
    },
    {
      title: "AI Outfit Generator",
      description: "Generate complete outfits for different occasions and seasons.",
    },
  ],
} as const;
