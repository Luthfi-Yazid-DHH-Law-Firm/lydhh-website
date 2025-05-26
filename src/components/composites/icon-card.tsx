import AnimationWrapper from "@/components/wrappers/animation-wrapper";
import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
} from "react";

const IconCard = ({
  index,
  Icon,
  className,
  children,
}: {
  index: number;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >;
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
      <Icon className="text-4xl" />
      {children}
    </AnimationWrapper>
  );
};

export default IconCard;
