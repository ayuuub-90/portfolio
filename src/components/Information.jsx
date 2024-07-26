import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaX } from "react-icons/fa6";

const Information = () => {
  return (
    <div className="text-white w-1/2 max-lg:w-full max-lg:px-10 max-md:px-4 min-h-[460px] flex flex-col center">
      <div className="max-lg:text-center font-mono">
        <p className="pb-3 max-md:pb-1 max-md:text-sm text-gray-400">Software Developer</p>
        <p className="text-7xl max-lg:text-5xl max-md:text-3xl ">Hello I'm</p>
        <p className="text-7xl max-lg:text-4xl max-md:text-2xl font-bold text-main-color tracking-wider">
          Ayoub Ahnaou
        </p>
        <p className="w-[520px] max-lg:w-full max-md:text-sm font-mono mt-6 ">
          I am excel at creating elegant digital experiences and I am proficient in
          various programming languages and technologies
        </p>

        {/* social links */}
        <div className="flex max-md:flex-col max-md:gap-6 gap-4 max-lg:gap-2 items-center text-main-color pt-16 max-md:pt-10 justify-between">
          <button className="border-main-color border-2 outline-none px-10 max-md:px-20 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-main-color hover:text-white max-md:text-sm">
            DOWNLOAD CV
          </button>
          <div className="flex gap-10 max-lg:gap-3 max-md:gap-10">
            <a href="https://www.github.com/ayuuub-90" target="_blank">
              <FaGithub className="size-6 cursor-pointer hover:text-white" />
            </a>
            <FaLinkedin className="size-6 cursor-pointer hover:text-white" />
            <FaX className="size-6 cursor-pointer hover:text-white" />
            <a href="https://www.instagram.com/ahnaou_a" target="_blank">
              <FaInstagram className="size-6 cursor-pointer hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
