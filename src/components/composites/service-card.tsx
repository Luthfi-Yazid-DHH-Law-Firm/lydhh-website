import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import LinkButton from "@/components/ui/link";
import Image from "next/image";
import { ArrowRightIcon } from "@sanity/icons";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
  Slug,
} from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

const ServiceCard = ({
  service,
  index,
  className,
  textColor = "text-white"
}: {
  service: {
    _id: string;
    name: string | null;
    slug: Slug | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    position: null;
  };
  index: number;
  className?: string;
  textColor?: string;
}) => {
  const delay = 0.1 * index;
  return (
    <AnimationWrapper
      classname={"flex flex-col px-5 gap-4 mb-8 " + className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      {service.image ? (
        <Image
          src={urlFor(service.image).auto("format").url()}
          alt={service.name || ""}
          width={251}
          height={251}
          className="w-full h-64 object-cover"
        />
      ) : null}
      <LinkButton
        href={`/our-services/${service.slug?.current}`}
        className={`w-full ${textColor}`}
      >
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-semibold text-start">{service.name}</p>
          <ArrowRightIcon className="text-xl font-semibold" />
        </div>
      </LinkButton>
    </AnimationWrapper>
  );
};

export default ServiceCard;
