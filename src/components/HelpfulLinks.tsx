import { HELPFUL_LINKS } from "@/lib/types";

export default function HelpfulLinks() {
  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Helpful Links
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HELPFUL_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <span className="text-blue-700 font-medium text-sm">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
