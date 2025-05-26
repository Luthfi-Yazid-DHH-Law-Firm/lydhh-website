import ContactAddressTitle from "@/components/features/contact/contact-address-title";
import ContactAddressList from "@/components/features/contact/contact-address-list";

const ContactAddress = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-20 px-8 lg:px-16"
    >
      <div className="w-full 2xl:w-[1440px] grid grid-cols-1 lg:grid-cols-2 relative">
        <ContactAddressTitle/>
        <ContactAddressList />
      </div>
    </section>
  );
};

export default ContactAddress;
