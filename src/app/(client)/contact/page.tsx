import ContactAddress from "@/components/templates/contact/contact-address";
import HeroSmall from "@/components/templates/hero-small";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";
import HomepageContact from "@/components/templates/homepage/homepage-contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Luthfi Yazid DHH Law Firm",
  description: "Luthfi Yazid DHH Law Firm focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "dhh", "luthfi yazid", "jakarta", "indonesia", "firm", "law firm indonesia"]
};

export default function ContactPage() {
  return (
    <>
        <HeroSmall />
        <ContactAddress />
        <HomepageContact />
        <HomepageArticles />
    </>
  );
};
