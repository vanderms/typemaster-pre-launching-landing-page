import type { NextPage } from 'next';
import Head from 'next/head';
import TopBar from '../components/topbar/topbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <TopBar/>
      
    </>
  );
};

export default Home;
