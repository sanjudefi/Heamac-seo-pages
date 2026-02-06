import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Heamac</h3>
            <p className="text-sm leading-relaxed">
              Trusted provider of neonatal care and home phototherapy solutions
              across India.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Pregnancy Care</h4>
            <ul className="space-y-2 text-sm">
              {[3, 4, 5, 6, 7, 8, 9].map((m) => (
                <li key={m}>
                  <Link
                    href={`/pregnancy/${m}/care`}
                    className="hover:text-white transition-colors"
                  >
                    Month {m} Care
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Neonatal Care</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/jaundice/what-is-neonatal-jaundice"
                  className="hover:text-white transition-colors"
                >
                  Neonatal Jaundice
                </Link>
              </li>
              <li>
                <Link
                  href="/phototherapy/how-phototherapy-works"
                  className="hover:text-white transition-colors"
                >
                  Phototherapy Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/newborn/1"
                  className="hover:text-white transition-colors"
                >
                  Newborn Day 1
                </Link>
              </li>
              <li>
                <a
                  href="https://www.heamac.com/rental/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Phototherapy Rental
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.heamac.com/products/nLite360-AI100.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  nLite360 AI100
                </a>
              </li>
              <li>
                <a
                  href="https://www.heamac.com/contact-us.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Heamac. All rights reserved.</p>
          <p className="mt-1 text-gray-500">
            The information on this site is for educational purposes and does not
            replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
