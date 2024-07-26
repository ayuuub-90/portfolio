import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const Contact = () => {
  const infos = [
    { icon: <FaPhoneAlt />, title: "Phone", description: "+212 623 42 44 30" },
    {
      icon: <IoMail />,
      title: "Email",
      description: "ayoubahnaou@gmail.com",
    },
    {
      icon: <IoLocation />,
      title: "Address",
      description: "Meknes, Hay Taakadoum, Rue 27, N° 10.",
    },
  ];

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
    <>
      <div className="w-full h-full max-lg:h-auto center">
        <div className="w-[1200px] h-[85%] flex max-lg:flex-col-reverse text-white font-mono">
          {/* left side contains fields */}
          <div className="bg-fourth-color w-1/2 max-lg:w-full h-full flex flex-col gap-6 justify-between p-6 font-bold">
            <h1 className="text-main-color text-3xl pt-4">
              Let's work together
            </h1>

            <p className="text-gray-400 font-sans">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur dolorum aliquid sint blanditiis impedit eos nobis quia!
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Firstname" className="input" />
                <input type="text" placeholder="Lastname" className="input" />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Email address"
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="input"
                />
              </div>
              <select className="input text-gray-400">
                <option value="" defaultValue={""} hidden>
                  select a service
                </option>
                <option value="Web developement">Web developement</option>
                <option value="UI/UX design">UI/UX design</option>
                <option value="Logo design">Logo design</option>
              </select>
              <div className="">
                <textarea
                  type="text"
                  placeholder="Type your message here."
                  className="input resize-none"
                  rows={6}
                />
              </div>
            </div>

            <button className="btn">Send message</button>
          </div>

          {/* right side contains informations */}
          <div className="w-1/2 max-lg:w-full h-full center">
            <div className="w-4/5 max-lg:w-full max-lg:p-4 h-1/2 flex flex-col gap-10">
              {infos.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="bg-fourth-color size-[70px] center text-main-color">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-gray-400">{item.title} </div>
                    <div className="max-lg:max-w-[240px] ">
                      {item.description}{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
