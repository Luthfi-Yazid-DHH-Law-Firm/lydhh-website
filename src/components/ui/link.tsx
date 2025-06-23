"use client";

import { useRouter } from "next/navigation";
import { FC, ReactNode, useState } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
}

const LinkButton: FC<LinkButtonProps> = ({
  href,
  children,
  className,
  underline = true,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={"text-[#E1BC1C] w-fit flex flex-col " + className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {underline && (
        <span
          className={`h-[2px] w-full bg-[#E1BC1C] rounded mt-1 origin-left transition-transform duration-300 ${hover ? "scale-x-100" : "scale-x-0"} `}
        />
      )}
    </button>
  );
};

export default LinkButton;
