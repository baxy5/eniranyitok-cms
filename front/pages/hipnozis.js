import React from "react";
import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import ReactMarkdown from "react-markdown";

const Hipnozis = ({ hipnosisData, mainTilesData }) => {
  return (
    <div>
      <Layout>
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
        <div className="bg-[#161718]">
          <HomeTiles data={mainTilesData} />
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const [mainTiles, hipnosis] = await Promise.all([
    fetch(process.env.NEXT_PUBLIC_HOME_API),
    fetch(process.env.NEXT_PUBLIC_HIPNOSIS_API),
  ]);

  const mainTilesDataJSON = await mainTiles.json();
  const hipnosisDataJSON = await hipnosis.json();
  const mainTilesData = await mainTilesDataJSON.data.attributes.HomeTiles[0];
  const hipnosisData = await hipnosisDataJSON.data.attributes;

  return {
    props: {
      mainTilesData,
      hipnosisData,
    },
  };
}

export default Hipnozis;
