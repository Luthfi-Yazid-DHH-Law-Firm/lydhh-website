import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import LinkButton from "@/components/ui/link";
import Image from "next/image";
import testImg from "@/assets/test1.webp";
import { ReactNode } from "react";

const ServiceCard = ({
  index,
  href,
  className,
  children
}: {
  index: number;
  href: string;
  className?: string;
  children: ReactNode;
}) => {
  const delay = 0.1 * index;
  return (
    <AnimationWrapper
      classname={"flex flex-col px-5 gap-4 mb-8 " + className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      <Image src={testImg} alt="service-image" width={251} height={251} className="w-full h-64 object-cover" />
      <LinkButton href={href} className="w-full text-white">
        {children}
      </LinkButton>
    </AnimationWrapper>
  );
};

export default ServiceCard;
