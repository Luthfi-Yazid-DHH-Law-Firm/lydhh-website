import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import { ReactNode } from "react";

const ValueCard = ({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) => {
  const delay = 0.1 * index;
  return (
    <AnimationWrapper
      classname={"flex flex-col py-3 px-5 gap-4 mb-8 " + className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      {/* <Image src={testImg} alt="service-image" width={251} height={251} className="w-full h-64 object-cover" /> */}
      <h1 className="text-2xl font-bold">{index + 1}</h1>
      {children}
    </AnimationWrapper>
  );
};

export default ValueCard;
