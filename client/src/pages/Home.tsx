import type {FC} from "react"
import PetFinderSection from "../components/PetFinderSection";
import AdoptHighlight from "../components/AdoptHighlight";
import {PetCarousel} from "../components/PetCarousel";
import AdoptOrFoster from "../components/AdoptOrFoster";

const Home: FC = () => {
    return (
        <div className="w-full">
            <section className="flex justify-center w-full">
                <PetFinderSection/>
            </section>
            <div style={{ marginTop: '211px' }} className="w-full">
                <AdoptHighlight/>
            </div>
            <PetCarousel/>
            <AdoptOrFoster/>
        </div>
    );
};

export default Home;
