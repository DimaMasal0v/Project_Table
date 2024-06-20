import React from "react";
import "./App.css";

const CFBlock = ({ recentWorks }) => {
  const { left, right } = recentWorks;
  const {
    title,
    subtitle,
    images: leftImages,
    projects: leftProjects,
    button: leftButton,
  } = left;
  const {
    images: rightImages,
    projects: rightProjects,
    button: rightButton,
  } = right;

  return (
    <section className="relative">
      <div className="grid sm:grid-cols-2 grid-cols-none sm:grid-rows-1 grid-rows-none">
        <div id="container-grid">
          <h5 className="uppercase text-yellow-500 sm:text-sm font-bold xl:text-2xl">
            {title}
          </h5>
          <h6 className="sm:text-6xl sm:normal italic font-normal text-3xl">
            {subtitle}
          </h6>
          {leftImages.map((image, index) => (
            <img key={index} className="" src={image.src} alt={image.alt} />
          ))}
          {leftProjects.map((project, index) => (
            <React.Fragment key={index}>
              <h4 className="sm:text-4xl sm:font-normal text-2xl italic mt-6">
                {project.title}
              </h4>
              <span
                className="text-lg font-light text-neutral-400"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></span>
            </React.Fragment>
          ))}
          <br />
          <button
            id={leftButton.id}
            className="button-contact xl:mt-24 sm:mt-8 text-sm sm:inline-block hidden"
          >
            <a href={leftButton.link}>{leftButton.text}</a>
          </button>
        </div>
        <div id="recent-works-right">
          {rightImages.map((image, index) => (
            <React.Fragment key={index}>
              <img className="" src={image.src} alt={image.alt} />
              <h4
                className="sm:text-4xl sm:font-normal text-2xl italic"
                id="hotel-title"
              >
                {rightProjects[index].title}
              </h4>
              <span
                className="text-lg font-light text-neutral-400 sm:inline-block block"
                id="hotel-description"
                dangerouslySetInnerHTML={{
                  __html: rightProjects[index].description,
                }}
              ></span>
            </React.Fragment>
          ))}
          <br />
          <button
            id={rightButton.id}
            className="button-contact xl:mt-24 sm:mt-8 text-sm sm:hidden mt-10 ml-5"
          >
            <a href={rightButton.link}>{rightButton.text}</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CFBlock;
