import React from "react";
import "./App.css";

const Block = (props) => {
  const { blocks } = props;

  return (
    <div className="flex justify-center pb-5 min-w-0 xl:flex-no-wrap flex-col relative text-black">
      <div className="grid sm:grid-cols-3 grid-cols-1 grid-rows-1 sm:gap-5">
        {blocks.map((block) => {
          const { title, description, img } = block;
          return (
            <div className="one mb-5">
              <img className="pl-5 pt-5" src={img} alt="" />
              <h2 className="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
                {title}
              </h2>
              <p className="text-lg font-normal ml-6 mr-6">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Block;
