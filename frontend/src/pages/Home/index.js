import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./about";
import Experiences from "./experiences";
import Projects from "./projects";
import Courses from "./courses";
import Contact from "./contact";
import Footer from "./footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";
function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro  />
          <About />
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default Home;
