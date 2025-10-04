import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import Groups from "../components/Groups";
import { getStrapiData } from "../utils/data";

export default function Group({ tilesData, groupsData }) {
  return (
    <div>
      <Layout>
        {groupsData && <Groups data={groupsData} />}
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
  const [tiles, groups] = await Promise.all([
    await getStrapiData("/home"),
    await getStrapiData("/group"),
  ]);

  const tilesData = tiles.data.attributes.HomeTiles;
  const groupsData = groups.data.attributes.GroupTiles;

  return {
    props: {
      tilesData: tilesData || {},
      groupsData: groupsData || {},
    },
  };
}
