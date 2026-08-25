import { AiCapabilities } from "@/components/home/AiCapabilities";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <AiCapabilities />
    </>
  );
}
