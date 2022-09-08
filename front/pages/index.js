import Layout from "../components/Layout";
import About from "../components/About";
import Hero from "../components/Hero";

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <Hero tilesData={data} />
        <About />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://eniranyitok-cms.herokuapp.com/api/home?populate=*"
  );
  const json = await res.json();
  const data = await json.data.attributes.HomeTiles[0];

  return {
    props: {
      data,
    },
  };
}
