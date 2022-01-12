import React from "react";
import {getPage} from "/pages/api/api"

const Portfolio = ({props}) => {
  console.log(props[0].fields.url)

  return (

      <section className="portfolio" id="portfolio-section">
        {props.map((prop) => (

            <div className="portfolio-container transition3">
              <div className="portfolio-left">
                <div className="inner">
                  <p className="subtitle">{prop.fields.subtitle}</p>
                  <a href={prop.fields.url} className="featured-title">
                    {prop.fields.name}
                  </a>
                  <p className="featured-desc">
                    {prop.fields.description}
                  </p>
                </div>
              </div>
              <a href={prop.fields.url}>
                <img src={`https:` + prop.fields.image.fields.file.url} alt="website" />
              </a>
            </div>
        ))}

      </section>
  );
};

export default Portfolio;
