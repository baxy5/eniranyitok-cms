import Layout from "../components/Layout";
import About from "../components/About";
import Hero from "../components/Hero";
import { getStrapiData } from "../utils/data";

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        {data && <Hero tilesData={data} />}
        <About />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getStrapiData("/home");
  const homeData = data.data.attributes.HomeTiles;

  return {
    props: {
      data: homeData || {},
    },
  };
}
