import { AiCapabilities } from "@/components/home/AiCapabilities";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedCategories />
      <AiCapabilities />
    </>
  );
}
