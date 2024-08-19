import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";


function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const {portfolioData} = useSelector((state) => state.root);
  const {courses} = portfolioData;
  return (
    <div>
      <SectionTitle title="courses" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-tertiary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((Course, index) => (
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
                {Course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl font-bold">
              {courses[selectedItemIndex].title}
            </h1>

            <p className="text-fifth">
            {courses[selectedItemIndex].description}
            </p>
          </div>
          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-52 w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
