import { DealOfTheDay } from "../components/DealOfTheDay";
import Hero from "../components/Hero";
import { Categories } from "../components/Categories";
import FeaturedParts from "../components/FeaturedParts";
import AdditionalInfo from "../components/AdditionalInfo";

export function LandingPage() {
  return (
    <div className="space-y-20">
      <Hero />
      <Categories />
      <FeaturedParts />
      <DealOfTheDay />
      <AdditionalInfo />
    </div>
  );
}
