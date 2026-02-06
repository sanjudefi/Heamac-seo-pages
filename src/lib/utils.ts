export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function monthToTrimester(month: number): string {
  if (month <= 3) return "first";
  if (month <= 6) return "second";
  return "third";
}

export function monthToWeeks(month: number): string {
  const weekStart = (month - 1) * 4 + 1;
  const weekEnd = month * 4;
  return `${weekStart}–${weekEnd}`;
}

export function getOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function generateStructuredData(params: {
  title: string;
  description: string;
  url: string;
  faqs?: { question: string; answer: string }[];
}) {
  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: params.title,
      description: params.description,
      url: params.url,
      publisher: {
        "@type": "Organization",
        name: "Heamac",
        url: "https://www.heamac.com",
      },
      medicalAudience: [
        { "@type": "MedicalAudience", audienceType: "Patient" },
        { "@type": "MedicalAudience", audienceType: "Clinician" },
      ],
    },
  ];

  if (params.faqs && params.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: params.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
}
