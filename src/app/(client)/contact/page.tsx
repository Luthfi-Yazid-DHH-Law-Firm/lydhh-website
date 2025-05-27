import ContactAddress from "@/components/templates/contact/contact-address";
import HeroSmall from "@/components/templates/hero-small";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";
import HomepageContact from "@/components/templates/homepage/homepage-contact";

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
