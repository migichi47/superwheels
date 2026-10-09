import { SlideShow } from "../components/SlideShow";
import { DealOfTheDay } from "../components/DealOfTheDay";
import { FeaturedCategories } from "../components/FeaturedCategories";
import { RecommendedProductsGrid } from "../components/RecommendedProductsGrid";

export function LandingPage() {
  return (
    <div>
      <SlideShow />
      <DealOfTheDay />
      <FeaturedCategories />
      <RecommendedProductsGrid />
    </div>
  );
}
