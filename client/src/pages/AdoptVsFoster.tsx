import type { FC } from "react";
import Component1 from "../components/Component1";
import AdoptOrFoster from "../components/AdoptOrFoster";

const AdoptVsFoster: FC = () => {
  return (
    <div className="w-full px-6 py-8 space-y-4">
      <section className="flex justify-center w-full">
        <Component1 />
      </section>
      <section className="flex justify-center w-full">
        <AdoptOrFoster />
      </section>
    </div> 
  );
};

export default AdoptVsFoster;
