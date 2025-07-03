import ContactAddressTitle from "@/components/features/contact/contact-address-title";
import ContactAddressList from "@/components/features/contact/contact-address-list";

const ContactAddress = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-start py-20 space-y-8"
    >
      <ContactAddressTitle/>
      <ContactAddressList />
    </section>
  );
};

export default ContactAddress;
