import Head from "next/head";
import Navbar from "../components/navbar";
import Team from "../components/team";
import About from "../components/about";
export default function Home() {
  return (
    <>
      <Head>
        <title>InstaStudy</title>
        <meta name="description" content="InstaStudy landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <About />
        <Team />
      </main>
    </>
  );
}
