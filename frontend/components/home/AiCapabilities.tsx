import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <Card key={capability.title}>
            <CardHeader>
              <CardTitle>{capability.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">{capability.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
