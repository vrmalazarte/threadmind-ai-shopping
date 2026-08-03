import { Container } from "@/components/layout/Container";

export default function HomePage() {
  return (
    <Container>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          ThreadMind
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Discover clothing through AI-powered search, personalized
          recommendations, and intelligent outfit generation.
        </p>
      </section>
    </Container>
  );
}