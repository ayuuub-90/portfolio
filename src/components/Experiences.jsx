import { GoDotFill } from "react-icons/go";

const Experiences = () => {
  const experiences = {
    icon: "",
    title: "My experiences",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, rerum? Consequuntur explicabo odit impedit eius! Dolores.",
    items: [
      { company: "Larevo", position: "Intern", duration: "Summer - 2024" },
      { company: "Sanisra", position: "Intern", duration: "Summer - 2023" },
      {
        company: "Degital Agency",
        position: "UI/UX Designer",
        duration: "2022 - 2023",
      },
      {
        company: "Software Developer Firm",
        position: "Junior Developer",
        duration: "2021 - 2022",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <h1 className="text-4xl max-md:text-2xl font-bold">{experiences.title}</h1>
      <p className="text-gray-400 max-md:text-sm">{experiences.description}</p>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 pr-4 pb-6 overflow-auto scrollable-content show-scrollbar">
        {experiences.items.map((item) => (
          <div key={item.company} className="bg-fourth-color p-4 rounded-md gap-1 flex flex-col">
            <p className="text-main-color max-md:text-sm">{item.duration} </p>
            <p className="text-lg font-bold pb-6 max-md:pb-2">{item.position} </p>
            <p className="text-gray-400 flex items-center gap-2 max-md:text-sm">
              <GoDotFill className="size-3 text-main-color"/>
              {item.company}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
