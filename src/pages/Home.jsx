import Stats from "../components/Stats";
import Information from "../components/Information";
import Picture from "../components/Picture";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const Home = () => {
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

  return <>
    <div className="flex flex-col h-full px-4">
      {/* side contains the information and image */}
      <div className="flex max-lg:flex-col-reverse pt-10">
        <Information />
        <Picture />
      </div>
      {/* side contains informations of projects, experience, commits... */}
      <div className="mt-20 max-lg:mt-0 px-32 max-xl:px-0 max-lg:pl-10 max-lg:pr-6 pb-10">
        <Stats />
      </div>
    </div>
  </>;
};

export default Home;
