import Link from 'next/link';
import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy | GameZone"
      description="GameZone Privacy Policy - Learn how we protect your data and privacy."
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including when you:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Contact us through our contact form</li>
              <li>Sign up for our newsletter</li>
              <li>Participate in our community features</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              These technologies are used to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
              <li>Provide personalized content and advertisements</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Advertising</h2>
            <p className="mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your 
              prior visits to our website and other sites. You can opt out of personalized advertising by visiting 
              <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer"> Google's Ads Settings</a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission 
              over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Children's Privacy</h2>
            <p className="mb-4">
              Our website is not directed to children under 13. We do not knowingly collect personal information from children 
              under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us through our 
              <Link href="/contact" className="text-blue-600 hover:text-blue-800"> contact form</Link>.
            </p>

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