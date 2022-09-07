import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Rolam() {
  const [aboutData, setAboutData] = useState({});

  const fetchData = () => {
    fetch("https://eniranyitok-cms.herokuapp.com/api/about?populate=*")
      .then((res) => res.json())
      .then((res) => {
        setAboutData(res.data.attributes.AboutSection[0]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {/* <ReactMarkdown className="sm:text-lg">
              {aboutData.Text}
            </ReactMarkdown> */}
            <ReactMarkdown children={aboutData.Text} />
          </div>
        </div>
        <div className="bg-[#161718]">
          <HomeTiles />
        </div>
      </Layout>
    </div>
  );
}
