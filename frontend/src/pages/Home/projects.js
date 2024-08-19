import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-tertiary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-white border-white border-l-4 -ml-[3px] bg-[#9e9b9b] py-3"
                    : "text-tertiary"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl font-bold">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-fifth font-semibold">
              {projects[selectedItemIndex].description}
            </p>
            {projects[selectedItemIndex].link ? (
              <a href={projects[selectedItemIndex].link} target="_blank" rel="noopener noreferrer">
                <i className="ri-line text-secondary font-semibold">Click more ...</i>
              </a>
            ) : (
              <p className="text-tertiary font-semibold">On progress</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
