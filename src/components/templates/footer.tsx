import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { COMPANY_ADDRESSES_QUERY } from "@/sanity/lib/queries";
import { COMPANY_LOGO_QUERYResult } from "@/sanity/types";
import { EnvelopeIcon, MarkerIcon } from "@sanity/icons";
import Image from "next/image";
import { FC } from "react";

const options = { next: { revalidate: 60 } };

interface FooterProps {
  logo: COMPANY_LOGO_QUERYResult;
}

const Footer: FC<FooterProps> = async ({ logo }) => {
  const addresses = await client.fetch(COMPANY_ADDRESSES_QUERY, {}, options);
  const mainAddress = addresses[0];
  return (
    <footer className="w-full py-12 flex items-center justify-center bg-white border-t border-[#B58C2A]">
      <div className="w-full 2xl:w-[1440px] px-5 md:px-10 flex flex-col md:flex-row md:justify-between">
        <div className="space-y-3">
          {logo?.image ? (
            <Image
              width={176}
              height={53}
              src={urlFor(logo.image).auto("format").url()}
              alt="jilo-logo"
              className="w-64 object-contain mb-5"
            />
          ) : (
            <Image
              width={176}
              height={53}
              src="/images/jilo-logo-small.png"
              alt="jilo-logo"
              className="w-64 object-contain mb-5"
            />
          )}
          <div className="flex items-start lg:items-center gap-2 text-[#999999]">
            <MarkerIcon className="text-lg font-bold" />
            <p className="max-w-2xs">
              {mainAddress.name}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[#999999]">
          <h5 className="text-white text-xl font-medium">Contact</h5>
          <div className="flex items-center gap-2 text-[#999999]">
            <EnvelopeIcon className="text-lg font-bold" />
            <p className="max-w-2xs">info@lydhhlawfirm.com</p>
          </div>
        </div>

        {/* <div>
          
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
