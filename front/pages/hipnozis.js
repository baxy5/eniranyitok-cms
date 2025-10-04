import React from "react";
import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import ReactMarkdown from "react-markdown";
import { getStrapiData } from "../utils/data";

const Hipnozis = ({ hipnosisData, mainTilesData }) => {
  return (
    <div>
      <Layout>
        {hipnosisData && (
          <div className="h-full bg-[#161718] text-[#9f844e] p-3 pt-16 sm:p-5 sm:pt-20 md:px-28 lg:px-80">
            <div>
              <h1 className="text-3xl custom-underline mb-5 sm:text-5xl">
                {hipnosisData.title}
              </h1>
            </div>
            <div>
              <ReactMarkdown>{hipnosisData.content}</ReactMarkdown>
            </div>
          </div>
        )}
        {mainTilesData && (
          <div className="bg-[#161718]">
            <HomeTiles data={mainTilesData} />
          </div>
        )}
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const [mainTiles, hipnosis] = await Promise.all([
    await getStrapiData("/home"),
    await getStrapiData("/hipnosys"),
  ]);

  const mainTilesData = mainTiles.data.attributes.HomeTiles;
  const hipnosisData = hipnosis.data.attributes;

  return {
    props: {
      mainTilesData: mainTilesData || {},
      hipnosisData: hipnosisData || {},
    },
  };
}

export default Hipnozis;
