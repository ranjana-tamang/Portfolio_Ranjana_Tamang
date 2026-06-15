import { Aave } from "iconsax-reactjs";
import SmallCard from "./SmallCard";
import Button from "./Button";
import CountCard from "./CountCard";

const AboutMe = () => {
  return (
    <div className="container_my mainTopBottomPadding" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
        <div className="flex-1 ">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="heading1">About Me</h1>
            <h1 className="heading2">
              {/* Boost Business Strategic Solutions with Us */}
            </h1>
            <h4 className="contextText">
              I am a Frontend Developer specializing in React.js. I build
              responsive, user-friendly web applications with clean and
              efficient code. I am passionate about creating smooth user
              experiences and continuously improving my development skills.
            </h4>
          </div>
          {/* <div className="flex gap-4 flex-wrap md:flex-nowrap"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SmallCard
              title="React Developer"
              content="Business consulting consultants provide expert advice."
              hoverBg={true}
              icon={<img src="/React-Logo-PNG-Images.webp" />}
              icontype="icon"
              CircleClassName="bg-none"
            />
            <SmallCard
              title="Responsive Design"
              content="Creating mobile-first, responsive layouts that deliver seamless experiences across all devices."
              hoverBg={true}
              icon={<Aave size="32" />}
              icontype="icon"
              CircleClassName="bg-none"
            />
          </div>
          <div className="my-4">
            <Button text="Get Started" link="/contact" />
          </div>
        </div>
        <div className="flex w-full items-center  h-full ">
          <div className="grid grid-cols-1 md:cgrid-cols-1 lg:grid-cols-2 gap-4 md:gap-8   w-full">
            <CountCard number={5} type="+" content="Project Completed" />
            <CountCard number={10} type="+" content="Technology Used" />
            <CountCard number={100} type="%" content="Commitment to Quality" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
