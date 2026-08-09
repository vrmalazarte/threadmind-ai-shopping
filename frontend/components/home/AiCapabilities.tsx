import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeConfig } from "@/config/home";

export function AiCapabilities() {
  return (
    <Section className="border-t">
      <SectionHeading
        eyebrow="AI Capabilities"
        title="Shopping powered by artificial intelligence."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {homeConfig.aiCapabilities.map((capability) => (
          <div
            key={capability.title}
            className="rounded-2xl border p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">{capability.title}</h3>

            <p className="mt-3 text-muted-foreground">
              {capability.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}