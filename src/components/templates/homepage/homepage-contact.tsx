import ContactForm from "@/components/composites/contact-form";
import HomepageContactTitle from "@/components/features/homepage/homepage-contact-title";

const HomepageContact = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-20 px-8 lg:px-16 bg-[#5E0302]/80 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url(/bg-parallax3.webp)",
        backgroundBlendMode: "overlay",
      }}
    >
        
      <div className="w-full 2xl:w-[1440px] space-y-8">
        <HomepageContactTitle />
        <ContactForm />
      </div>
    </section>
  );
};

export default HomepageContact;
