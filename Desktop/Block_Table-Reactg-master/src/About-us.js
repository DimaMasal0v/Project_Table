import React from "react";

const AboutUs = (props) => {
  const { aboutUsTitle, aboutUsSubtitle, description, images, statistics } = props;

  return (
    <section className="relative sm:mb-0 mb-10">
      <div className="sm:flex justify-between sm:px-28">
        <div className="sm:grid-cols-2 sm:grid-rows-none grid-cols-none grid-rows-1 sm:px-2 px-1">
          <h5 className="uppercase text-yellow-500 sm:text-sm font-bold xl:text-2xl">
            {aboutUsTitle}
          </h5>
          <h6 className="sm:text-6xl italic sm:normal font-normal text-3xl">
            {aboutUsSubtitle}
          </h6>
          <span className="">{description}</span>
        </div>
        <div className="flex justify-between sm:gap-5 sm:mr-32">
          {images.map((image, index) => (
            <img key={index} className="sm:mb-10 sm:w-64 sm:h-96 w-32 h-60" src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
      <div className="sm:mb-5 hidden sm:block relative">
        <div className="sm:flex justify-center">
          {statistics.map((stat, index) => (
            <React.Fragment key={index}>
              <span className="xl:text-6xl sm:text-xs sm:flex">{stat.value}</span>
              <span className="text-sm pt-6 pl-2 sm:flex">{stat.text}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
