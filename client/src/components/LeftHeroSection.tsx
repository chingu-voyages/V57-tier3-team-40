import type { FC } from "react";
import backgroundImage from "../assets/petFinderSection/LeftSectionImage.jpg";

const LeftHeroSection: FC = () => {
  return (
    <div
      className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-20 relative overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "#00000080",
        }}
      />

      <div className="relative z-10">
        <h1
          className="text-white"
          style={{
            width: '460px',
            height: '150px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '60px',
            lineHeight: '87px',
            letterSpacing: '0%',
            marginBottom: '60px',
          }}
        >
          Find your new<br />best friend.
        </h1>

        <p
          className="text-white"
          style={{
            width: '396px',
            height: '119px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '40px',
            letterSpacing: '0%',
          }}
        >
          Explore thousands of furry friends from 10,000+ shelters and rescues waiting for a home.
        </p>
      </div>
    </div>
  );
};

export default LeftHeroSection;
