import Info from "../components/Info";
import React from "react";

import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";

export default function About({ aboutData, mainTilesData }) {
  return (
    <div>
      <Layout>
        <Info data={aboutData} />
        <div className="bg-[#161718]">
          <HomeTiles data={mainTilesData} />
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [about, mainTiles] = await Promise.all([
    fetch(process.env.NEXT_PUBLIC_ABOUT_API),
    fetch(process.env.NEXT_PUBLIC_HOME_API),
  ]);

  const aboutDataJSON = await about.json();
  const mainTilesDataJSON = await mainTiles.json();
  const aboutData = await aboutDataJSON.data.attributes.AboutSection[0];
  const mainTilesData = await mainTilesDataJSON.data.attributes.HomeTiles[0];

  return {
    props: {
      aboutData,
      mainTilesData,
    },
  };
}
