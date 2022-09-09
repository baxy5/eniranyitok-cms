import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import Pricing from "../components/Pricing";

export default function Price({ pricingData, mainTilesData, title }) {
  return (
    <div>
      <Layout>
        <Pricing data={pricingData} title={title} />
        <div className="bg-[#161718]">
          <HomeTiles data={mainTilesData} />
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [pricing, mainTiles] = await Promise.all([
    fetch(process.env.NEXT_PUBLIC_PRICE_API),
    fetch(process.env.NEXT_PUBLIC_HOME_API),
  ]);

  const pricingDataJSON = await pricing.json();
  const mainTilesDataJSON = await mainTiles.json();
  const pricingData = await pricingDataJSON.data.attributes.PricesTiles[0];
  const title = await pricingDataJSON.data.attributes.Title;
  const mainTilesData = await mainTilesDataJSON.data.attributes.HomeTiles[0];

  return {
    props: {
      pricingData,
      title,
      mainTilesData,
    },
  };
}
