import { FaFigma, FaJava } from "react-icons/fa6";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import { RiBootstrapFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGit, SiMongodb, SiPostman, SiSass, SiTypescript } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const Skills = () => {
  const skills = {
    title: "My skills",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eligendi corporis. Recusandae voluptas beatae, quod dolore non accusamus dolorem doloremque!.",
    items: [
      { icon: <IoLogoHtml5 className="size-10 max-md:size-5"/>, title: "HTML5" },
      { icon: <IoLogoCss3 className="size-10 max-md:size-5"/>, title: "CSS3" },
      { icon: <IoLogoJavascript className="size-10 max-md:size-5"/>, title: "javascript" },
      { icon: <SiTypescript className="size-10 max-md:size-5"/>, title: "typescript" },
      { icon: <FaJava className="size-10 max-md:size-5"/>, title: "java" },
      { icon: <IoLogoReact className="size-10 max-md:size-5"/>, title: "react.js" },
      { icon: <RiTailwindCssFill className="size-10 max-md:size-5"/>, title: "tailwind css" },
      { icon: <RiBootstrapFill className="size-10 max-md:size-5"/>, title: "bootstrap" },
      { icon: <IoLogoNodejs className="size-10 max-md:size-5"/>, title: "node.js" },
      { icon: <SiPostman className="size-10 max-md:size-5"/>, title: "postman" },
      { icon: <SiSass className="size-10 max-md:size-5"/>, title: "sass" },
      { icon: <TbBrandMysql className="size-10 max-md:size-5"/>, title: "mysql" },
      { icon: <SiMongodb className="size-10 max-md:size-5"/>, title: "MongoDB" },
      { icon: <SiGit className="size-10 max-md:size-5"/>, title: "git" },
      { icon: <FaFigma className="size-10 max-md:size-5"/>, title: "Figma" },
    ],
  };
  return (
    <div className="flex flex-col gap-4 h-full">
      <h1 className="text-4xl max-md:text-2xl font-bold">{skills.title}</h1>
      <p className="text-gray-400 max-md:text-sm">{skills.description}</p>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 pr-4 pb-6 overflow-auto scrollable-content show-scrollbar">
        {skills.items.map((item) => (
          <div
            key={item.title}
            className="bg-fourth-color p-4 rounded-md gap-1 flex flex-col hover:text-main-color"
          >
            <div className="flex items-center gap-2">
              {item.icon} <label className="max-md:text-sm">{item.title}</label>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
