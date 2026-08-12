import { Search, Shirt, Sparkles } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeConfig } from "@/config/home";

const capabilityIcons = {
  search: Search,
  sparkles: Sparkles,
  shirt: Shirt,
};

export function AiCapabilities() {
  return (
    <Section className="border-t">
      <SectionHeading
        eyebrow="AI Capabilities"
        title="Shopping powered by artificial intelligence."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {homeConfig.aiCapabilities.map((capability) => {
          const Icon = capabilityIcons[capability.icon];

          return (
            <Card key={capability.title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted">
                  <Icon className="size-5" />
                </div>

                <CardTitle>{capability.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}