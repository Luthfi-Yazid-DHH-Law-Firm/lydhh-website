import ContactAddressTitle from "@/components/features/contact/contact-address-title";
import ContactAddressList from "@/components/features/contact/contact-address-list";
import { client } from "@/sanity/lib/client";
import { COMPANY_ADDRESSES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const ContactAddress = async () => {
  const addresses = await client.fetch(COMPANY_ADDRESSES_QUERY, {}, options);
  return (
    <section
      className="w-full flex flex-col items-center justify-start py-20 space-y-8"
    >
      <ContactAddressTitle/>
      <ContactAddressList addresses={addresses} />
    </section>
  );
};

export default ContactAddress;
