import type {FC} from "react"
import PetFinderSection from "../components/PetFinderSection";
import AdoptHighlight from "../components/AdoptHighlight";
import {PetCarousel} from "../components/PetCarousel";

const Home: FC = () => {
    return (
        <div className="w-full py-8 space-y-4">
            <section className="flex justify-center w-full">
                <PetFinderSection/>
            </section>
            <AdoptHighlight/>
            <PetCarousel/>
        </div>
    );
};

export default Home;
