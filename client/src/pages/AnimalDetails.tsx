import type { FC } from "react";
import Header from "../components/Header.tsx";
import Component1 from "../components/Component1.tsx";
import Component2 from "../components/Component2.tsx";
import Footer from "../components/Footer.tsx";

const AnimalDetails: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="h-[70vh] w-full">
        <Header />
      </section>
      <main className="w-full">
        <div className="w-full px-6 py-8 space-y-4">
          <div className="flex justify-center w-full">
            <Component1 />
          </div>
          <div className="flex justify-center w-full">
            <Component2 />
          </div>
        </div>
      </main>
      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default AnimalDetails;