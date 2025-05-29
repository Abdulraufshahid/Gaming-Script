import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Head>
        <title>{title || 'GameZone - Play Free Online Games'}</title>
        <meta name="description" content={description || 'Play the best free online games with no download or installation. Fun, fast, and mobile-friendly!'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
} 