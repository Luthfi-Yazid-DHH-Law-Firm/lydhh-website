import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { urlFor } from "@/sanity/lib/image";
import { ServiceType } from "@/types/service-type";
import Image from "next/image";
import Link from "next/link";

const ArrowIcon = () => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
);

const variants = {
  dark: {
    card: "bg-[#0a0c0f] hover:bg-[#0f1318]",
    imgFade: "from-[#0a0c0f] group-hover:from-[#0f1318]",
    bodyBorder: "border-white/[0.05]",
    name: "text-[#d4d8de] group-hover:text-white",
    placeholder: "bg-[#0d1117]",
  },
  light: {
    card: "bg-white hover:bg-[#faf8f5]",
    imgFade: "from-white group-hover:from-[#faf8f5]",
    bodyBorder: "border-black/[0.06]",
    name: "text-[#2a2a2a] group-hover:text-[#0d1117]",
    placeholder: "bg-[#f0ede8]",
  },
};

const ServiceCard = ({
                       service,
                       index,
                       variant = "light",
                     }: {
  service: ServiceType;
  index: number;
  variant?: "light" | "dark";
}) => {
  const delay = Math.min(0.05 * index, 0.4);
  const v = variants[variant];

  return (
      <AnimationWrapper
          classname="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay }}
      >
        <Link
            href={`/practice-areas/${service.slug?.current}`}
            className={`group flex flex-col h-full transition-colors duration-300 overflow-hidden ${v.card}`}
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            {/* Gold top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {service.image ? (
                <Image
                    src={urlFor(service.image).auto("format").url()}
                    alt={service.name ?? ""}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover filter grayscale-[20%] brightness-75 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-[1.05] transition-all duration-500"
                />
            ) : (
                <div
                    className={`w-full h-[200px] flex items-center justify-center ${v.placeholder}`}
                >
                  <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9a84c"
                      strokeWidth="1"
                      opacity="0.3"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
            )}

            {/* Bottom fade into card body */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t to-transparent transition-colors duration-300 ${v.imgFade}`}
            />
          </div>

          {/* Card body */}
          <div
              className={`flex items-center justify-between gap-3 px-4 py-4 border-t mt-auto ${v.bodyBorder}`}
          >
            <p
                className={`text-[13px] font-normal leading-snug transition-colors duration-200 ${v.name}`}
            >
              {service.name}
            </p>
            <div className="flex-shrink-0 w-7 h-7 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c]/12 group-hover:border-[#c9a84c]/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
              <ArrowIcon />
            </div>
          </div>
        </Link>
      </AnimationWrapper>
  );
};

export default ServiceCard;