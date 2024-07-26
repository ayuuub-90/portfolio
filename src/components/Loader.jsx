import { hourglass } from "ldrs";

const Loader = () => {
  hourglass.register();

  return (
    <div className="w-full h-full center">
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="var(--main-color)"
      ></l-hourglass>
    </div>
  );
};

export default Loader;
