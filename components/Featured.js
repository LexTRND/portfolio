import React from "react";

const MyComponent = () => {
  return (
    <section className="featured">
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle"> Featured Project</p>
          <a href="https://awpainting-u3vrpo8zv-lextrnd.vercel.app" className="featured-title">
            AW Painting
          </a>
          <p className="featured-desc">
            This was done for a painting company in Minneapolis. The site
            included a gallery to showcase work, and an app to let clients
            schedule appointments
          </p>
        </div>
      </div>
      <a href="https://awpainting-u3vrpo8zv-lextrnd.vercel.app" >
      <img className="right transition2" src="/featuredImage.png" alt="image" />
        </a>
    </section>
  );
};

export default MyComponent;
