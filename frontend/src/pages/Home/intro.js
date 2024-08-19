import React from "react";

// import Resume from "../../asset/doc/Combined_CV.pdf";
import { useSelector } from "react-redux";

function Intro() {
  const {portfolioData} = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-6 py-10 px-4 ">
      <h2 className="text-white text-4xl sm:text-2xl md:text-4xl lg:text-3xl">
      {welcomeText || ""}
      </h2>

      <h1 className="text-6xl sm:text-xl md:text-4xl lg:text-3xl text-fourth font-semibold">
      {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-4xl sm:text-xl md:text-4xl lg:text-3xl text-white font-semibold">
      {caption || ""}
      </h1>
      <p className="text-white">
      {description || ""}
      </p>

      <a className="border-2 border-tertiary text-white px-10 py-3 rounded " 
            href="https://www.linkedin.com/in/mustefa-sadedin-890a9b297/" 
            rel="noreferrer" target="_">Hire me</a>
     
    </div>
  );
}

export default Intro;
