import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            GameZone
          </Link>
          <div className="space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-800">
              Privacy
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 