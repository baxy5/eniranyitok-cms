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

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_HOME_API);
  const json = await res.json();
  const data = await json.data.attributes.HomeTiles[0];

  return {
    props: {
      data,
    },
  };
}
