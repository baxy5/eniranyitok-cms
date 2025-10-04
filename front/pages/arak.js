import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import Pricing from "../components/Pricing";
import { getStrapiData } from "../utils/data";

export default function Price({ pricingData, mainTilesData, title }) {
  return (
    <div>
      <Layout>
        {pricingData && title && <Pricing data={pricingData} title={title} />}
        {mainTilesData && (
          <div className="bg-[#161718]">
            <HomeTiles data={mainTilesData} />
          </div>
        )}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const [pricing, mainTiles] = await Promise.all([
    await getStrapiData("/price"),
    await getStrapiData("/home"),
  ]);

  const pricingData = pricing.data.attributes.PricesTiles;
  const title = pricing.data.attributes.Title;
  const mainTilesData = mainTiles.data.attributes.HomeTiles;

  return {
    props: {
      pricingData: pricingData || {},
      title: title || "",
      mainTilesData: mainTilesData || {},
    },
  };
}
