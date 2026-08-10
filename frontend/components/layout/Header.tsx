import { Container } from "./Container";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="border-b">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
}
