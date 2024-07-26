import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLocation } from "react-router";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  const location = useLocation();

  const handleClick = () => {

  }

  return (
    <div className="w-full bg-fourth-color center h-16 z-10 text-white sticky top-0">
      <div className="h-full w-3/4 flex justify-between items-center max-lg:w-full">
        <a
          href="/"
          className="text-2xl max-lg:text-xl max-lg:pl-4 font-mono cursor-pointer"
        >
          Aa<span className="text-5xl text-main-color">.</span>
        </a>

        {/* items shown in desktop mode */}
        <div className="flex gap-16 items-center font-mono max-lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`nav-item ${
                location.pathname == link.path ? "text-main-color" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* items shown in mobile mode */}
        {menu ? (
          <>
            <IoMdClose
              className="hidden max-lg:block size-6 mx-5 cursor-pointer"
              onClick={(e) => setMenu(!menu)}
            />
            <div id="menu"  className="fixed shadow-2xl bg-fourth-color px-4 gap-2 py-4 w-full top-16 flex flex-col z-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`nav-item-mobile ${
                    location.pathname == link.path ? "text-main-color" : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </>
        ) : (
          <IoMdMenu
            className="hidden max-lg:block size-6 mx-5 cursor-pointer"
            onClick={(e) => setMenu(!menu)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
