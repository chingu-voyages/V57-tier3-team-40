import type { FC } from "react"
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import AdoptHighlight from "../components/AdoptHighlight";

const Home: FC = () => {
  return (
    <div className="w-full py-8 space-y-4">
      <section className="flex justify-center w-full">
        <Component1 />
      </section>
      <AdoptHighlight />
      <section className="flex justify-center w-full">
        <Component2 />
      </section>
    </div> 
  );
};

export default Home;
