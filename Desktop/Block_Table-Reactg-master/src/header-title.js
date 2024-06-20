import React from "react";

const Title = (props) => {
  const { title, subtitle } = props; // Деструктурируем props
  return (
    <React.Fragment>
      <React.Fragment className="flex justify-center">
        <h1 className="font-bold uppercase text-3xl text-center mb-1 min-w-min">
          {title}
        </h1>
      </React.Fragment>
      <p className="text-center mb-1">{subtitle}</p>
    </React.Fragment>
  );
};

export default Title;
