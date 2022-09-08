import React from "react";

export function PricingTiles({ data }) {
  return (
    <div className="pricing-card flex justify-center items-center h-56 text-center w-[300px] sm:w-[500px]">
      <div>
        <h2 className="text-2xl mb-5 md:text-4xl">{data.PriceOneName}</h2>
        <p className="text-lg">{data.PriceOne}</p>
      </div>
    </div>
  );
}
