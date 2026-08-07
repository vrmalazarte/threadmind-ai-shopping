import { ReactNode } from "react";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}