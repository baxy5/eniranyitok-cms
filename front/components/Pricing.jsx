import { PricingTiles } from "./PricingTiles";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pricing = () => {
  const [pricingData, setPricingData] = useState({});
  const [pricingTitle, setPricingTitle] = useState(null);

  const fetchData = () => {
    fetch("https://eniranyitok-cms.herokuapp.com/api/price?populate=*")
      .then((res) => res.json())
      .then((res) => {
        setPricingData(res.data.attributes.PricesTiles[0]);
        setPricingTitle(res.data.attributes.Title);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="arak h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="bg-transparent text-[#9F844E] font-bold text-center text-4xl p-10 sm:text-6xl md:text-7xl">
          {pricingTitle}
        </h1>
        <div className="text-[#161718] bg-transparent flex justify-around flex-wrap gap-10 p-10">
          <PricingTiles data={pricingData} />
          <PricingTiles data={pricingData} />
          <PricingTiles data={pricingData} />
          <PricingTiles data={pricingData} />
          <PricingTiles data={pricingData} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
