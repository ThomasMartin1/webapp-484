import Head from "next/head";
import Navbar from "../components/navbar";

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
        <section id="about">
          {/*turn this section into about component*/}
          <h1>Welcome to InstaStudy</h1>
          <p>procrastination ends here</p>
        </section>
        <section id="team">{/*turn this section into team component*/}</section>
      </main>
    </>
  );
}
