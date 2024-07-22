// pages/contact.tsx
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact - Muhammed Fadhil M.K</title>
        <meta name="description" content="Contact Me" />
      </Head>

      <Header />

      <main className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
