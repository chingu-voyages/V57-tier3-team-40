import adpotOrFoster from "../assets/homepage/adoptOrFoster.png";

const AdoptOrFoster = () => {
  return (
    <section className="max-w-[1440px] mx-auto lg:flex lg:flex-row items-center mb-23 lg:mb-38 xl:mb-50">
      <div className="px-6 mb-10 lg:mb-0 lg:w-[48%] lg:px-20 xl:px-28">
        <h2
          className="text-3xl lg:text-4xl xl:text-5xl text-[#104C35] font-semibold lg:font-medium text-center 
          lg:text-left mb-5 xl:mb-8"
        >
          Adopt or Foster?
        </h2>
        <p className="lg:text-[1.25rem] xl:text-[1.5rem] mb-3">
          Not sure if fostering or adopting is the right choice for you? We’ll
          walk you through the differences so you can find the best way to
          welcome a furry friend into your life.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button
            className="mt-10 bg-[#08872B] text-white rounded-[15px] shadow-[0px_6px_6px_rgba(0,0,0,0.25)] hover:bg-[#0a9931] cursor-pointer
                     transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Kitten Paws, cursive",
              fontSize: "2.7rem",
              width: "474px",
              height: "98.6px",
              textShadow: "1px 1px 2px #0d6028",
              letterSpacing: "1px",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="lg:px-0 lg:w-[52%]">
        <img src={adpotOrFoster} alt="dogs playing in puddle" />
      </div>
    </section>
  );
};

export default AdoptOrFoster;
