import { DealOfTheDay } from "../components/DealOfTheDay";
import { RecommendedProductsGrid } from "../components/RecommendedProductsGrid";
import Hero from "../components/Hero";
import { Categories } from "../components/Categories";
import FeaturedParts from "../components/FeaturedParts";

export function LandingPage() {
  return (
    <div className="space-y-20">
      <Hero />
      <Categories />
      <FeaturedParts />
      <DealOfTheDay />
      <RecommendedProductsGrid />
    </div>
  );
}
