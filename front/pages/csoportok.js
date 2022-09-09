import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import Groups from "../components/Groups";

export default function Group({ tilesData, groupsData }) {
  return (
    <div>
      <Layout>
        <Groups data={groupsData} />
        <div className="bg-[#161718]">
          <HomeTiles data={tilesData} />
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [tiles, groups] = await Promise.all([
    fetch(process.env.NEXT_PUBLIC_HOME_API),
    fetch(process.env.NEXT_PUBLIC_GROUP_API),
  ]);

  const tilesJSON = await tiles.json();
  const groupsJSON = await groups.json();

  const tilesData = await tilesJSON.data.attributes.HomeTiles[0];
  const groupsData = await groupsJSON.data.attributes.GroupTiles[0];

  return {
    props: {
      tilesData,
      groupsData,
    },
  };
}
