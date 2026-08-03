import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              AI-Powered Fashion
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
              Discover your next outfit with AI.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              ThreadMind combines semantic search, personalized
              recommendations, and intelligent outfit generation to help you
              find clothing that matches your style.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/products">Start Shopping</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/ai">Try AI Stylist</Link>
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}