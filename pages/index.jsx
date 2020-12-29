import Layout from "../components/layout";
import Hero from "../components/home/Hero";
import { NewSongsHome } from "../components/home/NewSongsHome";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <NewSongsHome />
    </Layout>
  );
}
