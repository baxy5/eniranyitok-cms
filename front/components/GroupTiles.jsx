import React from "react";

const GroupTiles = ({ title, text }) => {
  return (
    <div className="pricing-card flex justify-center items-center p-10 h-full text-center w-[300px] sm:w-[500px]">
      <div>
        <h2 className="rounded-sm sm:text-xl p-2 font-bold">{title}</h2>
        <p className="mb-5 md:text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default GroupTiles;
