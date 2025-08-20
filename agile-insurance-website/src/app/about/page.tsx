import AnimatedAboutPage from "@/components/AnimatedAboutPage";

export const metadata = {
  title: "About Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana | Who We Are",
  description: "Learn about Agile Insurance Brokers Ltd - Ghana's trusted insurance brokerage firm. Discover our mission, vision, and commitment to providing expert insurance solutions for businesses and individuals across Ghana.",
  keywords: "about Agile Insurance Brokers, insurance brokers Ghana, who we are, insurance company Ghana, trusted insurance brokers, professional insurance services Ghana, insurance brokerage firm Ghana",
  openGraph: {
    title: "About Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana",
    description: "Learn about Agile Insurance Brokers Ltd - Ghana's trusted insurance brokerage firm. Discover our mission, vision, and commitment to providing expert insurance solutions.",
    type: "website",
    url: "https://agilebrokersgh.com/about",
    images: [
      {
        url: "/Images/Logos/Logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "About Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana"
      }
    ]
  }
};

export default function AboutPage() {
  return <AnimatedAboutPage />;
} 