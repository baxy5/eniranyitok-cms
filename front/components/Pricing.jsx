import React from "react";
import { PricingTiles } from "./PricingTiles";

const Pricing = ({ data, title }) => {
  return (
    <div className="arak h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="bg-transparent text-[#9F844E] font-bold text-center text-4xl p-10 sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <div className="text-[#161718] bg-transparent flex justify-around flex-wrap gap-10 p-10">
          <PricingTiles data={data} />
          <PricingTiles data={data} />
          <PricingTiles data={data} />
          <PricingTiles data={data} />
          <PricingTiles data={data} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
