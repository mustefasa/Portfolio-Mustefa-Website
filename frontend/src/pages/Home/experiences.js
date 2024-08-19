import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const {portfolioData} = useSelector((state) => state.root)
  const {experiences} = portfolioData;
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-tertiary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1 key={index}
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-white border-white border-l-4 -ml-[3px] bg-[#9e9b9b] py-3"
                    : "text-tertiary"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl font-bold">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-fifth text-xl font-bold">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-fifth">
          {experiences[selectedItemIndex].description }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
