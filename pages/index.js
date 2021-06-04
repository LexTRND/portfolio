import React from "react";
import ProjectList from "../components/ProjectList";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";

export default function Home({ projects }) {
  console.log(projects);
  return (
    <div className="main">
      <Hero />
      <Featured />
      <Skills />
      <Portfolio />
    </div>
  );
}

