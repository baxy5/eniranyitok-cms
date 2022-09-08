import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";

export default function About({ aboutData, mainTilesData }) {
  return (
    <div>
      <Layout>
        <div className="h-full bg-[#161718] text-[#9f844e] p-3 pt-16 sm:p-5 sm:pt-20 md:px-28 lg:px-80">
          <div>
            <h1 className="text-3xl custom-underline mb-5 sm:text-5xl">
              {aboutData.Header}
            </h1>
          </div>
          <div>
            <ReactMarkdown children={aboutData.Text} />
          </div>
        </div>
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
