import type {FC} from "react";
import LeftHeroSection from "./LeftHeroSection";
import RightCategoryGrid from "./RightCategoryGrid";
import pawsImage from "../assets/petFinderSection/paws.avif";

const PetFinderSection: FC = () => (
    <div
        className="w-full min-h-[764px] md:h-[764px] flex flex-col md:flex-row overflow-hidden shadow-lg relative"
        style={{
            background: "#DFFFEA",
        }}
    >
        <div
            className="hidden md:block absolute inset-0 z-0"
            style={{
                backgroundImage: `url(${pawsImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover'
            }}
        />

        <LeftHeroSection/>
        <RightCategoryGrid/>
    </div>
);

export default PetFinderSection;
