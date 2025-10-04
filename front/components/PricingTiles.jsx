import React from "react";

export function PricingTiles({ amount, text }) {
  return (
    <div className="pricing-card flex justify-center py-6 px-4 h-full text-center w-full sm:max-w-[500px]">
      <div>
        <h2 className="text-2xl mb-5 md:text-4xl">{text}</h2>
        <p className="text-lg">{amount} Ft</p>
      </div>
    </div>
  );
}
