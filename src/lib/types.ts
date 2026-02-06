export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  level: "h2" | "h3";
  content: string;
}

export interface PageData {
  meta: PageMeta;
  intro: string;
  sections: ContentSection[];
  faqs: FAQItem[];
  cta: string;
}

export type Month = 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type PregnancyTopic =
  | "care"
  | "daily-routine"
  | "foods-to-eat"
  | "foods-to-avoid"
  | "weight-gain"
  | "exercises"
  | "sleep-positions"
  | "travel-safety"
  | "stress-management"
  | "common-symptoms"
  | "fetal-development";

export type Deficiency =
  | "iron"
  | "calcium"
  | "vitamin-d"
  | "vitamin-b12"
  | "folate"
  | "iodine"
  | "zinc"
  | "magnesium"
  | "omega-3";

export type DeficiencyTopic =
  | "overview"
  | "causes"
  | "symptoms"
  | "foods"
  | "effect-on-baby"
  | "trimester-wise"
  | "supplements";

export type Food =
  | "banana"
  | "milk"
  | "spinach"
  | "dates"
  | "eggs"
  | "fish"
  | "nuts"
  | "rice"
  | "dal"
  | "curd";

export type FoodTopic =
  | "benefits"
  | "safety"
  | "when-to-avoid"
  | "trimester-wise"
  | "indian-diet-plans";

export type NeonatalCondition =
  | "neonatal-jaundice"
  | "preterm-baby-care"
  | "low-birth-weight"
  | "nicu-baby-care-at-home"
  | "neonatal-hypothermia"
  | "neonatal-infections"
  | "neonatal-anemia";

export interface HelpfulLink {
  label: string;
  href: string;
}

export const HELPFUL_LINKS: HelpfulLink[] = [
  {
    label: "Home Care Phototherapy Rental – Hyderabad",
    href: "https://www.heamac.com/rental/",
  },
  {
    label: "Home Care Phototherapy Rental – Bangalore",
    href: "https://www.heamac.com/rental/",
  },
  {
    label: "Home Care Phototherapy Rental – Delhi",
    href: "https://www.heamac.com/rental/",
  },
  {
    label: "Buy Advanced Neonatal Phototherapy Devices (nLite360 AI100)",
    href: "https://www.heamac.com/products/nLite360-AI100.php",
  },
  {
    label: "Contact Heamac for Sales & Rental",
    href: "https://www.heamac.com/contact-us.html",
  },
];
