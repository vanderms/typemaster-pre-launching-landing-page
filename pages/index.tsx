import type { NextPage } from 'next';
import Head from 'next/head';
import TopBar from '../components/section-topbar/topbar';
import SectionHero from '../components/section-hero/section-hero';
import SectionProduct from '../components/section-product/section-product';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon-32x32.png"
        />
        <title>Frontend Mentor | Typemaster pre-launch landing page</title>
      </Head>
      <main>
        <TopBar />
        <SectionHero />
        <SectionProduct/>
      </main>
    </>
  );
};

export default Home;
