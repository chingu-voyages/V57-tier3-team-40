import type {FC} from "react"
import Component1 from "../components/Component1";
import AdoptHighlight from "../components/AdoptHighlight";
import {PetCarousel} from "../components/PetCarousel";

const Home: FC = () => {
    return (
        <div className="w-full py-8 space-y-4">
            <section className="flex justify-center w-full">
                <Component1/>
            </section>
            <AdoptHighlight/>
            <PetCarousel/>
        </div>
    );
};

export default Home;
