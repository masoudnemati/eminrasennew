import Head from "next/head";
import Layout from "../components/layout/layout";
import Hero from "../components/home/Hero";
import NewSongsHome from "../components/home/NewSongsHome";
import SeeAllVideoes from "../components//home/SeeAllVideoes";

export default function Home() {
  return (
    <>
      <Head>
        <title>امین راسن</title>
        <meta
          name="description"
          content="دانلود رپ ترکمن و آهنگ های امین راسن"
        />
      </Head>
      <Layout>
        <Hero />
        <NewSongsHome />
        <SeeAllVideoes />
      </Layout>
    </>
  );
}
