import Layout from "../components/layout/layout";
import Hero from "../components/home/Hero";
import NewSongsHome from "../components/home/NewSongsHome";
import SeeAllVideoes from "../components//home/SeeAllVideoes";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <NewSongsHome />
      <SeeAllVideoes />
    </Layout>
  );
}
