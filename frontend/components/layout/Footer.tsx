import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ThreadMind. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
