import React, { useState } from "react";

export default function ProjectList({ props }) {
  console.log(props);
  const [project, setProject] = useState(0);
  const siteUrl = "http://localhost:1337";

  const handleClick = () => {
    if (project < props.length) {
      setProject(project + 1);
    } else setProject(0);
  };
  return (
    <div className="projectList">
      <div className="companySection">
        <img src="" />
        <h4>{props[project].name}</h4>
        <img
          src={siteUrl + props[project].projectimage.url}
          className="siteImageCenter"
        />
        <p>{props[project].description}</p>
      </div>
      <div className="techSection">
        <h4>Stack</h4>
        <div className="stackContainer">
          <div className="stackElements">
            <img src={siteUrl + props[project].tech1image.url} />
            {props[project].tech1}
          </div>
          <div className="stackElements">
            <img src={siteUrl + props[project].tech2image.url} />
            {props[project].tech2}
          </div>
          <div className="stackElements">
            <img src={siteUrl + props[project].tech3image.url} />
            {props[project].tech3}
          </div>
          <div className="stackElements">
            <img src={siteUrl + props[project].tech4image.url} />
            {props[project].tech4}
          </div>
        </div>
        <button href="#" onClick={handleClick}>
          Click me
        </button>
      </div>
    </div>
  );
}
