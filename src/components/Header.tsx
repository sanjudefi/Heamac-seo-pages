import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Heamac
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/pregnancy/3/care" className="hover:text-blue-600">
            Pregnancy Care
          </Link>
          <Link href="/nutrition/iron/overview" className="hover:text-blue-600">
            Nutrition
          </Link>
          <Link href="/newborn/1" className="hover:text-blue-600">
            Newborn Care
          </Link>
          <Link
            href="/jaundice/what-is-neonatal-jaundice"
            className="hover:text-blue-600"
          >
            Jaundice
          </Link>
          <Link
            href="/phototherapy/how-phototherapy-works"
            className="hover:text-blue-600"
          >
            Phototherapy
          </Link>
          <a
            href="https://www.heamac.com/contact-us.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
