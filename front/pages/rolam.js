import Info from "../components/Info";
import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import { getStrapiData } from "../utils/data";

export default function About({ aboutData, mainTilesData }) {
  return (
    <div>
      <Layout>
        {aboutData && <Info data={aboutData} />}
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
  const [about, mainTiles] = await Promise.all([
    await getStrapiData("/about"),
    await getStrapiData("/home"),
  ]);

  const aboutData = about.data.attributes.AboutSection;
  const mainTilesData = mainTiles.data.attributes.HomeTiles;

  return {
    props: {
      aboutData: aboutData || {},
      mainTilesData: mainTilesData || {},
    },
  };
}
