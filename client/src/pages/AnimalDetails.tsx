import type { FC } from "react";
import Component1 from "../components/Component1.tsx";
import Component2 from "../components/Component2.tsx";

const AnimalDetails: FC = () => {
  return (
    <div className="w-full px-6 py-8 space-y-4">
      <section className="flex justify-center w-full">
        <Component1 />
      </section>
      <section className="flex justify-center w-full">
        <Component2 />
      </section>
    </div> 
  );
};

export default AnimalDetails;