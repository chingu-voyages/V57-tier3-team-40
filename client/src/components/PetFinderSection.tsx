import type { FC } from "react";
import LeftHeroSection from "./LeftHeroSection";
import RightCategoryGrid from "./RightCategoryGrid";

const PetFinderSection: FC = () => (
  <div className="w-full max-w-[1440px] h-[764px] mx-auto flex flex-col md:flex-row overflow-hidden shadow-lg">
    <LeftHeroSection />
    <RightCategoryGrid />
  </div>
);

export default PetFinderSection;
