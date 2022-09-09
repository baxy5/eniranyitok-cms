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
    fetch("https://eniranyitok-cms.herokuapp.com/api/about?populate=*"),
    fetch("https://eniranyitok-cms.herokuapp.com/api/home?populate=*"),
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
