import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio-section">
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">Conference App</p>
            <a href="https://github.com/LexTRND/GlobeProject" className="featured-title">
              Globamatics
            </a>
            <p className="featured-desc">
              This was a project for a fake conference app, that needed to
              inform attendants of start times and room locations. It uses react
              and for the frontend, and graphql & Apollo for the backend.
            </p>
          </div>
        </div>
        <a href="https://github.com/LexTRND/GlobeProject">
          <img src="/globe.png" alt="website" />
        </a>
      </div>
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">App for painting company</p>
            <a href="https://awpainting-u3vrpo8zv-lextrnd.vercel.app" className="featured-title">
              AW Painting
            </a>
            <p className="featured-desc">
              This was done for a painting company. The site
              included a gallery to showcase work, and an app to let clients
              schedule appointments
            </p>
          </div>
        </div>
        <a href="https://awpainting-u3vrpo8zv-lextrnd.vercel.app">
          <img src="/featuredImage.png" alt="website" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
