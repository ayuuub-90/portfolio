import { asset } from "../assets/asset";

const Picture = () => {
  return (
    <div className="center w-1/2 max-lg:w-full">
      <img src={asset.ayuub_img} alt="" className="relative hover:scale-105" />
      {/* <div className="absolute border border-main-color size-[400px] rounded-full"></div> */}
    </div>
  );
};

export default Picture;
