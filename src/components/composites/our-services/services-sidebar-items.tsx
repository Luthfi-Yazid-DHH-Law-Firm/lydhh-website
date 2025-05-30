"use client";

import { ChevronRightIcon } from "@sanity/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";

interface ServicesSidebarItemsProps {
  label: string;
  href: string;
}

const ServicesSidebarItems: FC<ServicesSidebarItemsProps> = ({
  label,
  href,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      className={`w-full border border-gray-300 px-6 py-3 flex items-center justify-between font-semibold transition-colors duration-300 text-lg ${
        isActive || hover
          ? "bg-linear-to-r from-[#d5aa6d] to-[#9b6f45] text-white"
          : ""
      }`}
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
      <ChevronRightIcon className="text-2xl" />
    </Link>
  );
};

export default ServicesSidebarItems;
