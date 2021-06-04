import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skill-section">
      <div className="skills-container">
        <ul>
          <li className="transition2">
            <div className="icon-container one">
              <img src="/computer.svg" alt="computer" />
            </div>
            <p className="skill-title">Frontend Development</p>
            <p className="featured-desc skill-desc">
              I can build amazing experiences for clients. I have an expert
              understanding of HTML, Javascript & CSS. I use the react library,
              and a number of it's frameworks like Next.
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container two">
              <img src="/server.svg" alt="server" />
            </div>
            <p className="skill-title">Backend Development</p>
            <p className="featured-desc skill-desc">
              It's all about speed, research shows users will leave after a few
              seconds of a screen loading. I do my best to make sure this
              doesn't happen. I use node and express. I'm extremely comfortable
              with the most popular databases. When building API's I can use
              REST or graphql.
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src="/design.svg" alt="art" />
            </div>
            <p className="skill-title">Design</p>
            <p className="featured-desc skill-desc">
              Probably my favorite part! I use adobe XD to plan the design &
              create elements. I use SASS or inline-styles for production
              depending on the project. I design for attention-grabbing
              experiences.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
