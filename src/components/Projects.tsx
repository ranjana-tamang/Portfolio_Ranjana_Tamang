import { Aave } from "iconsax-reactjs";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="container_my mainTopBottomPadding" id="projects">
      <div className="text-center">
        {/* <div className=""> */}
        <div className="flex-1 ">
          <div className="mb-4 sm:mb-8 lg:mb-12">
            <h1 className="topSubHeading">Featured Projects</h1>
            <h1 className="subHeading2 max-w-[60%] mx-auto">
              A selection of projects showcasing my frontend development skills
              and problem-solving abilities.{" "}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 items-center">
            <ProjectCard
              img="/card.webp"
              title="HR Management System"
              hoverBg={true}
              subTitle="A complete employee management platform with attendance tracking, payroll, and role-based access."
              TechTitle="Tech Stack: "
              TechTools="React.js, Redux Toolkit, TypeScript, Material UI"
            />
            <ProjectCard
              img="/card.webp"
              title="E-Commerce Website"
              hoverBg={true}
              subTitle="Modern online shopping platform with product filtering, cart management, and payment integration."
              TechTitle="Tech Stack: "
              TechTools="React.js, Next.js, Tailwind CSS"
            />
            <ProjectCard
              img="/card.webp"
              title="Portfolio Website"
              hoverBg={true}
              subTitle="Personal portfolio showcasing projects, skills, and professional experience with modern animations."
              TechTools="React.js, Framer Motion, Tailwind CSS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
