import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio-section">
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">Conference App</p>
            <p className="featured-title">Globamatics</p>
            <p className="featured-desc">
              This was a project for a fake conference app, that needed to
              inform attendants of start times and room locations. It uses react
              and for the frontend, and graphql & Apollo for the backend.
            </p>
          </div>
        </div>
        <a href="#">
          <img src="/globe.png" alt="website" />
        </a>
      </div>
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">App for painting company</p>
            <p className="featured-title">BJ Painting</p>
            <p className="featured-desc">
              This was done for a painting company in Minneapolis. The site
              included a gallery to showcase work, and an app to let clients
              schedule appointments
            </p>
          </div>
        </div>
        <a href="#">
          <img src="/featuredImage.png" alt="website" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
