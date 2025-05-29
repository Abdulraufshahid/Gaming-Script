import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} GameZone. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/about" className="hover:text-gray-800">About</Link>
            <Link href="/contact" className="hover:text-gray-800">Contact</Link>
            <Link href="/privacy" className="hover:text-gray-800">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 