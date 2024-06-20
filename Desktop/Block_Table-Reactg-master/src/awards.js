import React from "react";

const Awards = ({ title, awards }) => {
  return (
    <section>
      <div className="bg-gray-400 sm:h-32 h-96 mb-20 grid sm:grid-cols-12 grid-cols-4 gap-4 sm:gap-8 relative">
        <div>
          <p className="select-text text-white top-48 sm:left-10 absolute">
            {title}
          </p>
        </div>
        <div
          className="svg flex justify-center absolute left-36 sm:mt-6 xl:flex-no-wrap flex-col xl:grid grid-flow-col"
          id="awards-container"
        >
          {awards.map(({ img, text }, index) => (
            <div
              key={index}
              className="sm:mr-8 sm:ml-0 -ml-20 flex justify-start sm:mt-0 mt-3"
            >
              <img className="mr-3" src={img} alt={`Award ${index + 1}`} />
              <span className="sm:text-sm text-xs font-normal text-white pt-6">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
