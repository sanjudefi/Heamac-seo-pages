interface CTASectionProps {
  text?: string;
}

export default function CTASection({ text }: CTASectionProps) {
  const defaultText =
    "Heamac provides trusted neonatal phototherapy solutions for home care across major Indian cities including Hyderabad, Bangalore, Delhi, Chennai, and Mumbai. Whether you need a phototherapy device on rent or wish to purchase the advanced nLite360 AI100, our team is ready to assist you.";

  return (
    <section className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-lg">
      <h2 className="text-xl font-semibold text-blue-800 mb-3">
        Need Help with Neonatal Care?
      </h2>
      <p className="text-blue-700 leading-relaxed mb-4">
        {text || defaultText}
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://www.heamac.com/rental/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Rent Phototherapy Device
        </a>
        <a
          href="https://www.heamac.com/contact-us.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition-colors text-sm font-medium"
        >
          Contact Heamac
        </a>
      </div>
    </section>
  );
}
