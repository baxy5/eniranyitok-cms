import { PricingTiles } from "./PricingTiles";

const Pricing = ({ data, title }) => {
  return (
    <div className="arak h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="bg-transparent text-[#9F844E] font-bold text-center text-4xl p-10 sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <div className="text-[#161718] bg-transparent flex justify-around flex-wrap gap-10 p-10 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          <PricingTiles amount={data.PriceOne} text={data.PriceOneName} />
          <PricingTiles amount={data.PriceTwo} text={data.PriceTwoName} />
          <PricingTiles amount={data.PriceThree} text={data.PriceThreeName} />
          <PricingTiles amount={data.PriceFour} text={data.PriceFourName} />
          <PricingTiles amount={data.PriceFive} text={data.PriceFiveName} />
          <PricingTiles amount={data.PriceSix} text={data.PriceSixName} />
          <PricingTiles amount={data.PriceSeven} text={data.PriceSevenName} />
          <PricingTiles amount={data.PriceEight} text={data.PriceEightName} />
          <PricingTiles amount={data.PriceNine} text={data.PriceNineName} />
          <PricingTiles amount={data.PriceTen} text={data.PriceTenName} />
          <PricingTiles amount={data.PriceEleven} text={data.PriceElevenName} />
          <PricingTiles amount={data.PriceTwelve} text={data.PriceTwelveName} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
