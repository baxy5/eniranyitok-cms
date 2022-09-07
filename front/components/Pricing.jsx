import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pricing = () => {
  const [pricingData, setPricingData] = useState({});

  const fetchData = () => {
    fetch("https://eniranyitok-cms.herokuapp.com/api/price?populate=*")
      .then((res) => res.json())
      .then((res) => {
        setPricingData(res.data.attributes.PricesTiles[0]);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="arak h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="bg-transparent text-[#161718] font-bold text-center text-6xl p-10">
          Árak
        </h1>
        <div className="text-[#9F844E] bg-transparent flex justify-around flex-wrap gap-10 p-10">
          <div className="pricing-card flex justify-center items-center h-56 text-center w-[500px]">
            <div>
              <h2 className="text-2xl mb-5 md:text-4xl">
                {pricingData.PriceOneName}
              </h2>
              <p className="text-lg">{pricingData.PriceOne}</p>
            </div>
          </div>
          <div className="pricing-card  flex justify-center items-center h-56 text-center w-[500px]">
            <div>
              <h2 className="text-2xl mb-5 md:text-4xl">
                {pricingData.PriceTwoName}
              </h2>
              <p className="text-lg">{pricingData.PriceTwo}</p>
            </div>
          </div>
          <div className="pricing-card  flex justify-center items-center h-56 text-center w-[500px]">
            <div>
              <h2 className="text-2xl mb-5 md:text-4xl">
                {pricingData.PriceThreeName}
              </h2>
              <p className="text-lg">{pricingData.PriceThree}</p>
            </div>
          </div>
          <div className="pricing-card  flex justify-center items-center h-56 text-center w-[500px]">
            <div>
              <h2 className="text-2xl mb-5 md:text-4xl">
                {pricingData.PriceFourName}
              </h2>
              <p className="text-lg">{pricingData.PriceFour}</p>
            </div>
          </div>
          <div className="pricing-card  flex justify-center items-center h-56 text-center w-[500px]">
            <div>
              <h2 className="text-2xl mb-5 md:text-4xl">
                {pricingData.PriceFiveName}
              </h2>
              <p className="text-lg">{pricingData.PriceFive}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
