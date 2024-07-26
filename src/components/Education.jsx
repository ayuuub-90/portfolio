import { GoDotFill } from "react-icons/go";

const Education = () => {
  const education = {
    icon: "",
    title: "My education",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, saepe incidunt dolore placeat alias possimus.",
    items: [
      {
        institution: "Lycee Hommane El Fatouaki",
        degree: "Bac Science physic",
        duration: "2020 - 2021",
      },
      {
        institution: "Universite Moulay Ismail",
        degree: "SMPC",
        duration: "2021 - 2022",
      },
      {
        institution: "Ecole Superieure de Technologie Meknes",
        degree: "Genie Informatique",
        duration: "2022 - 2024",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <h1 className="text-4xl max-md:text-2xl font-bold">{education.title}</h1>
      <p className="text-gray-400 max-md:text-sm">{education.description}</p>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 pr-4 pb-6 overflow-auto scrollable-content show-scrollbar">
        {education.items.map((item) => (
          <div
            key={item.institution}
            className="bg-fourth-color p-4 rounded-md gap-1 flex flex-col"
          >
            <p className="text-main-color max-md:text-sm">{item.duration} </p>
            <p className="text-lg font-bold pb-6 max-md:pb-2">{item.degree} </p>
            <p className="text-gray-400 flex items-center gap-2 max-md:text-sm">
              <GoDotFill className="size-3 text-main-color" />
              {item.institution}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
