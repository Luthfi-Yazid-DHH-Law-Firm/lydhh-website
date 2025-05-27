import { PhoneIcon } from "@/assets/service-icons";
import { EnvelopeIcon, MarkerIcon } from "@sanity/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-12 flex items-center justify-center bg-[#191514]">
      <div className="w-full 2xl:w-[1440px] px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-8">
        <div className="space-y-3">
          <Image
            width={176}
            height={53}
            src="/jilo-logo-small.png"
            alt="jilo-logo"
            className="w-fit h-14 object-contain mb-5"
          />
          <div className="flex items-start lg:items-center gap-2 text-[#999999]">
            <MarkerIcon className="text-lg font-bold" />
            <p className="max-w-2xs">
              GKM Green Tower Floor 20 Jl. TB Simatupang Kav. 89-G, Jakarta
              Selatan (12520) - INDONESIA
            </p>
          </div>
          <div className="flex items-start lg:items-center gap-2 text-[#999999]">
            <MarkerIcon className="text-lg font-bold" />
            <p className="max-w-2xs">
              Jl. Waru Nomor 8-A, RT. 09, RW. 03, Gedong, Pasar Rebo, Jakarta
              Timur (13760) - INDONESIA
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[#999999] md:pl-8">
          <h5 className="text-white text-xl font-medium">Quick Links</h5>
          <Link
            href="/about-us"
            className=""
          >
            About
          </Link>
          <Link
            href="/team"
            className=""
          >
            Our Team
          </Link>
          <Link
            href="/our-services"
            className=""
          >
            Services
          </Link>
          <Link
            href="/articles"
            className=""
          >
            Articles
          </Link>
          <Link
            href="/gallery"
            className=""
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className=""
          >
            Contact Us
          </Link>
          
        </div>
        <div className="flex flex-col gap-3 text-[#999999]">
          <h5 className="text-white text-xl font-medium">Our Services</h5>
          <Link
            href="/about-us"
            className=""
          >
            About
          </Link>
          <Link
            href="/team"
            className=""
          >
            Our Team
          </Link>
          <Link
            href="/our-services"
            className=""
          >
            Services
          </Link>
          <Link
            href="/articles"
            className=""
          >
            Articles
          </Link>
          <Link
            href="/gallery"
            className=""
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className=""
          >
            Contact Us
          </Link>
          
        </div>
        <div className="flex flex-col gap-3 text-[#999999]">
          <h5 className="text-white text-xl font-medium">Contact</h5>
          <div className="flex items-center gap-2 text-[#999999]">
            <PhoneIcon className="w-[18px] h-[18px]" />
            <p className="max-w-2xs">+62 21 2949 0519</p>
          </div>
          <div className="flex items-center gap-2 text-[#999999]">
            <PhoneIcon className="w-[18px] h-[18px]" />
            <p className="max-w-2xs">+62 8778 6151</p>
          </div>
          <div className="flex items-center gap-2 text-[#999999]">
            <EnvelopeIcon className="text-lg font-bold" />
            <p className="max-w-2xs">info@jilolaw.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
