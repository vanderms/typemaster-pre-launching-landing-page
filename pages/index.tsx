import type { NextPage } from 'next';
import Head from 'next/head';
import TopBar from '../components/section-topbar/topbar';
import SectionHero from '../components/section-hero/section-hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <TopBar />
        <SectionHero/>
      </main>
    </>
  );
};

export default Home;
