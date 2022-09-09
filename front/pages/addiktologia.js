import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import Info from "../components/Info";

export default function Addiktologia({ tilesData, addData }) {
  return (
    <div>
      <Layout>
        <Info data={addData} />
        <div className="bg-[#161718]">
          <HomeTiles data={tilesData} />
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [tiles, addiktologia] = await Promise.all([
    fetch("https://eniranyitok-cms.herokuapp.com/api/home?populate=*"),
    fetch("https://eniranyitok-cms.herokuapp.com/api/addiktologia?populate=*"),
  ]);

  const tilesJSON = await tiles.json();
  const addJSON = await addiktologia.json();

  const tilesData = await tilesJSON.data.attributes.HomeTiles[0];
  const addData = await addJSON.data.attributes.AddiktologiaSection[0];

  return {
    props: {
      tilesData,
      addData,
    },
  };
}
