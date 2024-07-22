// pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Muhammed Fadhil M.K - Portfolio</title>
        <meta name="description" content="Portfolio of Muhammed Fadhil M.K" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
