import Layout from "../components/Layout";
import HomeTiles from "../components/HomeTiles";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <div>
      <Layout>
        <Pricing />
        <div className="bg-[#161718]">
          <HomeTiles />
        </div>
      </Layout>
    </div>
  );
}
