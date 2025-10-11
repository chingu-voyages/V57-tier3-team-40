import { useNavigate } from "react-router-dom";
import adpotOrFoster from "../assets/homepage/adoptOrFoster.avif";
import { Button, SectionHeading, Paragraph } from "./SectionTemplate";

const AdoptOrFoster = () => {
  const navigate = useNavigate(); 

  const handleLearnMoreClick = () => {
    navigate("/adopt-vs-foster"); 
  };

  return (
    <section className="max-w-[1440px] mx-auto lg:flex lg:flex-row items-center mb-23 lg:mb-38 xl:mb-50">
      <div className="px-6 mb-10 lg:mb-0 lg:w-[48%] lg:px-20 xl:px-28">
        <SectionHeading 
          className="mb-5 xl:mb-8"
          size="large"
          align="left"
        >
          Adopt or Foster?
        </SectionHeading>
        <Paragraph 
          className="mb-3"
          size="large"
        >
          Not sure if fostering or adopting is the right choice for you? We'll
          walk you through the differences so you can find the best way to
          welcome a furry friend into your life.
        </Paragraph>

        <div className="flex justify-center lg:justify-start">
          <Button
            onClick={handleLearnMoreClick}
            className="mt-10"
            variant="primary"
            size="large"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="lg:px-0 lg:w-[52%]">
        <img src={adpotOrFoster} alt="dogs playing in puddle" />
      </div>
    </section>
  );
};

export default AdoptOrFoster;
