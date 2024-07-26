const AboutMe = () => {
  const about = {
    title: "About me",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam id veniam nesciunt laudantium, ratione libero in maxime officia explicabo.",
    infos: [
      { fieldName: "Name", fieldValue: "Ayoub Ahnaou" },
      { fieldName: "Phone", fieldValue: "+212 623 424430" },
      { fieldName: "Email", fieldValue: "ayoubahnaou@gmail.com" },
      { fieldName: "Experience", fieldValue: "+2 years" },
      { fieldName: "Nationality", fieldValue: "Marocain" },
      { fieldName: "Languages", fieldValue: "Arabe, english & frensh" },
      { fieldName: "Address", fieldValue: "Mèknes" },
      { fieldName: "Freelance", fieldValue: "Avilaible" },
    ],
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <h1 className="text-4xl max-md:text-2xl font-bold">{about.title}</h1>
      <p className="text-gray-400 max-md:text-sm">{about.description}</p>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 pr-4 pb-6 overflow-auto scrollable-content show-scrollbar">
        {about.infos.map((item) => (
          <div
            key={item.fieldName}
            className="bg-fourth-color p-4 rounded-md gap-1 flex"
          >
            <p className="text-gray-400 max-md:text-sm">{item.fieldName}: </p>
            <p className="font-bold max-md:text-sm">{item.fieldValue} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
