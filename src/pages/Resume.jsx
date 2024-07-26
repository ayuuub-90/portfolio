import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Resume = () => {
  const elements = [
    { num: 0, name: "Experiences", element: <Experiences /> },
    { num: 1, name: "Education", element: <Education /> },
    { num: 2, name: "Skills", element: <Skills /> },
    { num: 3, name: "About me", element: <AboutMe /> },
  ];

  const [element, setElement] = useState(elements[0]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-[80vh] ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="center w-full h-full">
      <div className="w-[1200px] max-lg:w-full max-lg:h-full h-[70%] text-white font-mono flex max-lg:flex-col gap-2">
        <div className="w-[35%] max-lg:h-auto max-lg:w-full h-full flex flex-col gap-10 pr-4 max-lg:p-5 max-lg:gap-4">
          <div className="flex flex-col gap-4">
            {elements.map((elm) => (
              <div
                key={elm.num}
                onClick={() => setElement(elements[elm.num])}
                className={`rounded-md w-full p-3 cursor-pointer pl-4 max-md:text-sm ${
                  element.num == elm.num
                    ? "bg-main-color text-black"
                    : "bg-fourth-color text-white"
                }`}
              >
                {elm.name}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[65%] max-lg:w-full h-full pl-5">
          {elements.map(
            (elm) =>
              elm.num == element.num && (
                <div key={elm.num} className="h-full">
                  {elm.element}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
