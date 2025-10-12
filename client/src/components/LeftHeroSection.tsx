import type { FC } from "react";
import backgroundImage from "../assets/petFinderSection/LeftSectionImage.avif";

const LeftHeroSection: FC = () => {
  return (
    <div
      className="w-full md:w-1/2 flex flex-col justify-start md:justify-center pt-[27px] md:p-16 lg:p-20 px-8 pb-8 relative overflow-hidden z-10 bg-[#F5F5F5] md:bg-transparent md:[clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]"
    >
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      <div className="hidden md:block absolute inset-0 bg-[#00000080]" />

      <div className="relative z-10">
        <h1
          className="text-[#104C35] md:text-white text-center md:text-left font-bold md:font-semibold mb-[14px] md:mb-[60px] max-w-[460px] mx-auto md:mx-0 text-[36px] md:text-[60px] leading-[40px] md:leading-[87px] tracking-[0%]"
          style={{
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Find your new<br />best friend.
        </h1>

        <p
          className="text-[#232925] md:text-white text-center md:text-left font-normal md:font-semibold max-w-[396px] mx-auto md:mx-0 text-[16px] md:text-[24px] leading-[22px] md:leading-[40px] tracking-[-0.43px] md:tracking-[0%] mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Explore thousands of furry friends from 10,000+ shelters and rescues waiting for a home.
        </p>
      </div>
    </div>
  );
};

export default LeftHeroSection;
