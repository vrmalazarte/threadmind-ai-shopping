import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const categories = [
  {
    name: "New Arrivals",
    description: "Discover the latest additions to ThreadMind.",
  },
  {
    name: "Everyday Essentials",
    description: "Versatile pieces for your daily wardrobe.",
  },
  {
    name: "Streetwear",
    description: "Modern styles built around your personal look.",
  },
  {
    name: "Accessories",
    description: "Complete your outfit with the finishing details.",
  },
];

export function FeaturedCategories() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Explore"
        title="Find your style."
        description="Browse curated categories or let ThreadMind help you discover something new."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border p-6 transition-colors hover:bg-muted/50"
          >
            <h3 className="font-semibold">{category.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
