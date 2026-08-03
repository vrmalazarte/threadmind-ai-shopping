import { Container } from "@/components/layout/Container";

const capabilities = [
  {
    title: "Semantic Search",
    description:
      "Search naturally using phrases like 'black oversized hoodie for rainy weather'.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Receive clothing suggestions based on your preferences and shopping history.",
  },
  {
    title: "AI Outfit Generator",
    description:
      "Generate complete outfits for different occasions and seasons.",
  },
];

export function AiCapabilities() {
  return (
    <section className="border-t py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            AI Capabilities
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Shopping powered by artificial intelligence.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-2xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                {capability.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}