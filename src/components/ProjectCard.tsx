import Image from "next/image";
import Button from "./Button";

type SmallCardProps = {
  title?: string;
  subTitle?: string;
  TechTitle?: string;
  TechTools?: string;
  hoverBg?: boolean;
  img: string;
};
const ProjectCard = ({
  img,
  subTitle,
  title = "",
  TechTitle = "",
  TechTools = "",
  hoverBg = false,
}: SmallCardProps) => {
  return (
    <div className="group relative   rounded-xl p-.5">
      {/*  */}
      <div
        className="
          absolute inset-0 rounded-xl opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-[linear-gradient(135deg,#13fdfd_0%,#06131b_45%,#06131b_55%,#13fdfd_100%)]
        "
      />
      <div className="relative z-10 h-full w-full rounded-[10px] bg-cardbg overflow-hidden">
        <div className="    ">
          <div className={`flex flex-wrap gap-4 items-center mb-4`}>
            <div>
              <Image src={img} width={1000} height={1000} alt="img" />
            </div>
          </div>
          <div className="text-left">
            <div className="contextText  px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-6 text-white">
              <span className="font-semibold">{title}</span>
              <p className=" contextText wrap-break-word">{subTitle}</p>
              <div className="pt-4">
                <h2 className="label">{TechTitle}</h2>
                <p className=" text-heading4 wrap-break-word">{TechTools}</p>
              </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-6 py-2 sm:py-4 lg:py-4">
              <Button text="View Project" link="/contact" />
            </div>
          </div>
        </div>

        {hoverBg && (
          <div
            className="
      pointer-events-none
      absolute bottom-0 right-0 translate-x-1/2
      w-[40%] aspect-square
      rounded-full
      bg-background
      opacity-0
      blur-2xl
      transition-all duration-500
      group-hover:opacity-100
      group-hover:bg-[#13fdfd]/20
      group-hover:scale-110
      translate-y-1/2
      z-1
    "
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
