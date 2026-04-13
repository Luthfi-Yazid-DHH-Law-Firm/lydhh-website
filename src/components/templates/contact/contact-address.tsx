import ContactAddressTitle from "@/components/features/contact/contact-address-title";
import ContactAddressList from "@/components/features/contact/contact-address-list";
import { client } from "@/sanity/lib/client";
import { COMPANY_ADDRESSES_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

const ContactAddress = async () => {
  const addresses = await client.fetch(COMPANY_ADDRESSES_QUERY, {}, options);

  return (
      <section className="relative w-full text-black overflow-hidden">
        {/* Radial gold glow on the right */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                  "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(225,188,28,0.05) 0%, transparent 65%)",
            }}
        />

        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E1BC1C]/40 to-transparent" />

        {/* Title block */}
        <div className="relative w-full flex flex-col items-center pt-16 pb-12 px-8">
          <ContactAddressTitle />
        </div>

        {/* Map + info — full bleed, no extra padding */}
        <div className="relative w-full">
          <ContactAddressList addresses={addresses} />
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E1BC1C]/30 to-transparent" />
      </section>
  );
};

export default ContactAddress;