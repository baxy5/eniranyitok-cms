import React from "react";

const GroupTiles = ({ title, text }) => {
  return (
    <div className="pricing-card flex justify-center px-10 py-4 h-full sm:h-[400px] text-center w-full lg:h-[500px] xl:h-[350px]">
      <div>
        <h2 className="rounded-sm text-2xl sm:text-3xl p-2 font-bold">
          {title}
        </h2>
        <p className="mb-5 text-xl md:text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default GroupTiles;
