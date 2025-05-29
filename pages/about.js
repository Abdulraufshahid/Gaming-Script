import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout
      title="About Us | GameZone"
      description="Learn more about GameZone - your destination for free online games."
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About GameZone</h1>
          
          <div className="prose prose-lg">
            <p className="mb-4">
              Welcome to GameZone, your ultimate destination for free online gaming entertainment! 
              We are passionate about bringing you the best collection of free online games that you can play instantly in your browser.
            </p>

            <p className="mb-4">
              Our mission is to provide a safe, family-friendly gaming environment where players of all ages can enjoy 
              high-quality games without any downloads or installations. With over 20,000 games in our collection, 
              we ensure there's something for everyone - from action-packed adventures to brain-teasing puzzles.
            </p>

            <p className="mb-4">
              At GameZone, we believe in:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>Providing free, accessible gaming entertainment</li>
              <li>Maintaining a safe and family-friendly environment</li>
              <li>Regular updates with new and exciting games</li>
              <li>Fast loading times and smooth gameplay experience</li>
            </ul>

            <div className="mt-8">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                ← Back to Games
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 