"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface ServicesSidebarItemsProps {
  label: string;
  href: string;
}

const ChevronRight = () => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="flex-shrink-0"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
);

const ServicesSidebarItems: FC<ServicesSidebarItemsProps> = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.endsWith(`/${href}`);

  return (
      <Link
          href={href}
          className={[
            "flex items-center justify-between gap-2 px-5 py-2.5 text-[12.5px] transition-all duration-200 border-l-2",
            isActive
                ? "bg-[#c9a84c]/[0.06] border-[#c9a84c] text-[#0d1117] font-medium"
                : "border-transparent text-[#4a4a4a] hover:bg-[#c9a84c]/[0.04] hover:border-[#c9a84c]/40 hover:text-[#0d1117]",
          ].join(" ")}
      >
        <span className="leading-snug">{label}</span>
        <span className={isActive ? "text-[#c9a84c]" : "text-[#c9a84c] opacity-0 group-hover:opacity-100"}>
        <ChevronRight />
      </span>
      </Link>
  );
};

export default ServicesSidebarItems;