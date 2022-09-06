import Layout from "../components/Layout";
import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </div>
  );
}
