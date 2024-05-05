import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Planetary - Vy porfolio </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://stijndv.com" />
      <meta name="title" content="Vy Porfolio: Planetary E-commere" />
      <meta name="description" content="Checkout my page" key="desc" />
      <meta property="og:title" content="Vy Porfolio: Planetary E-commere" />
      <meta
        property="og:description"
        content="Checkout my page"
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/NjRvXs0/screenshot-1714923720.png"
      />

    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
