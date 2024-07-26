import { FaArrowLeft } from "react-icons/fa6";
import { asset } from "../assets/asset";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-full text-white flex-col">
      <img
        src={asset.moon}
        alt="pagenotfound"
        className="absolute -z-50 h-[92%] max-md:h-[93%] w-full mix-blend-color-dodge object-cover rotate-180"
      />
      <div className="h-full w-2/3 max-lg:w-full center font-mono z-10">
        <div className="w-2/3 max-lg:w-full h-2/3 max-md:h-full max-md:p-4 flex flex-col pt-10">
          <h1 className="text-lg font-bold">404</h1>
          <p className="text-5xl max-md:text-3xl font-bold">Lost in the woods.</p>
          <p className="w-[400px] max-md:w-full text-lg max-md:text-sm tracking-wide pt-6">
            Strange holws of nothingness, it feels unknown here.
          </p>
          <div to={"/"} className="flex items-center gap-4 pt-20 max-md:pt-10 ">
            <Link to={"/"} className="flex items-center gap-4">
              <FaArrowLeft className="size-5 max-md:size-4" />
              <p className="font-bold text-lg max-md:text-sm hover:underline">GO BACK HOME</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
