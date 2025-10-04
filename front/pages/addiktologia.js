import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import Info from "../components/Info";
import { getStrapiData } from "../utils/data";

export default function Addiktologia({ tilesData, addData }) {
  return (
    <div>
      <Layout>
        {addData && <Info data={addData} />}
        {tilesData && (
          <div className="bg-[#161718]">
            <HomeTiles data={tilesData} />
          </div>
        )}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const [tiles, addiktologia] = await Promise.all([
    await getStrapiData("/home"),
    await getStrapiData("/addiktologia"),
  ]);

  const tilesData = tiles.data.attributes.HomeTiles;
  const addData = addiktologia.data.attributes.AddiktologiaSection;

  return {
    props: {
      tilesData: tilesData || {},
      addData: addData || {},
    },
  };
}
