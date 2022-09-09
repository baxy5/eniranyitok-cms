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
    fetch("https://eniranyitok-cms.herokuapp.com/api/price?populate=*"),
    fetch("https://eniranyitok-cms.herokuapp.com/api/home?populate=*"),
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