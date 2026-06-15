import { Aave } from "iconsax-reactjs";
import SmallCard from "./SmallCard";

const Services = () => {
  return (
    <div className="container_my mainTopBottomPadding">
      <div className="text-center">
        {/* <div className=""> */}
        <div className="flex-1 ">
          <div className="mb-4 sm:mb-8 lg:mb-12">
            <h1 className="topSubHeading">Services</h1>
            <h2 className="subHeading2 ">What I Provide For You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
            <SmallCard
              title="UI/UX Implementation"
              content="Transforming designs into pixel-perfect, accessible, and responsive user interfaces."
              hoverBg={true}
              icon={<Aave size="40" />}
              icontype="icon"
              largeIcon
            />
            <SmallCard
              title="Web Development"
              content="Developing modern web applications using React, Next.js, TypeScript, and REST APIs."
              hoverBg={true}
              icon={<Aave size="40" />}
              icontype="icon"
              largeIcon
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
