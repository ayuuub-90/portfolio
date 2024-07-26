import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { num: 2, name: "years of experience" },
    { num: 8, name: "projects completed" },
    { num: 7, name: "technologies mastered" },
    { num: 280, name: "code commits" },
  ];

  return (
    <div className="w-full text-white grid grid-cols-4 max-lg:grid-cols-2 gap-14 max-xl:gap-4 ">
      {stats.map((stat) => (
        <div
          key={stat.num}
          className="flex gap-4 font-mono font-bold items-center max-md:justify-center max-md:center"
        >
          <span className="text-8xl max-xl:text-7xl max-lg:text-[55px] max-md:text-[40px]">
            <CountUp end={stat.num} duration={5} />
          </span>
          <span className="w-[200px] max-lg:w-auto text-xl max-lg:text-lg max-md:text-sm leading-snug">
            {stat.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
