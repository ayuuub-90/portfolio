import { useEffect, useState } from "react";
import { asset } from "../assets/asset";
import { IoLogoGithub, IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Loader from "../components/Loader";

const Work = () => {
  const projects = [
    {
      num: "01",
      category: "full-stack",
      title: "e-commerce platforme",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quidem obcaecati culpa veniam nobis. Consequatur, quo. Eum illum ad aut.",
      stack: [
        { name: "Express js" },
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" },
      ],
      image: asset.e_com,
      github: "https://github.com/ayuuub-90/rma-project",
    },
    {
      num: "02",
      category: "full-stack",
      title: "medical platforme",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quidem obcaecati culpa veniam nobis. Consequatur, quo. Eum illum ad aut.",
      stack: [
        { name: "Express js" },
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" },
      ],
      image: asset.medical,
      github: "https://github.com/ayuuub-90/rma-project",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return (
      <div className="h-[80vh] ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full h-full max-lg:h-auto center">
      <div className="w-[1200px] max-xl:w-full h-[50%] flex max-lg:flex-col-reverse max-xl:px-4 gap-10 text-white font-mono">
        {/* informations side */}
        <div className="w-1/2 max-lg:w-full max-lg:px-10 max-md:px-2 max-lg:text-center flex flex-col gap-4 justify-between max-xl:pb-6">
          <p className="text-white text-7xl max-md:text-4xl leading-none font-bold text-transparent text-outline">
            {project.num}
          </p>
          <p className="text-2xl max-md:text-xl font-bold tracking-wider">
            {project.title} project
          </p>
          <p className="text-gray-400 max-md:text-sm">{project.description}</p>
          <div className="flex gap-4 text-main-color max-lg:justify-center">
            {project.stack.map((item) => (
              <p key={item.name} className="max-md:text-sm">{item.name}, </p>
            ))}
          </div>
          <hr className="border-gray-700" />
          <div className="flex gap-4 max-lg:justify-center">
            <a href="" target="_blank">
              <IoArrowForward className="size-14 max-md:size-12 hover:text-main-color text-white bg-fourth-color rounded-full p-2" />
            </a>
            <a href={project.github} target="_blank">
              <IoLogoGithub className="size-14 max-md:size-12 hover:text-main-color text-white bg-fourth-color rounded-full p-2" />
            </a>
          </div>
        </div>
        {/* image side */}
        <div className="w-1/2 max-lg:w-full center max-lg:pt-4">
        {/* <img src={project.image} alt="" /> */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="max-lg:h-auto "
          >
            {projects.map((item) => (
              <SwiperSlide key={item.num} className="h-auto  ">
                <img
                  src={item.image}
                  className="size-full object-cover"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Work;
