import { FAQItem } from "@/lib/types";

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-gray-200 rounded-lg"
          >
            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-800 hover:bg-gray-50">
              <span>{faq.question}</span>
              <span className="ml-2 shrink-0 text-gray-500 group-open:rotate-180 transition-transform">
                &#9660;
              </span>
            </summary>
            <div className="px-4 pb-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
