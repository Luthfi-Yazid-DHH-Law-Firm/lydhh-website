"use client";

import { usePathname } from "next/navigation";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { capitalizeWords } from "@/lib/capitalizeFirstLetter";

const HeroSmall = () => {
  const path = usePathname();
  const pathSegments = path.split("/").filter((segment) => segment !== "");

  const breadcrumbItems: BreadcrumbItem[] = pathSegments.map(
    (segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const isCurrentPage = index === pathSegments.length - 1;
      const label = capitalizeWords(segment.split("-").join(" "));

      return {
        label,
        href: isCurrentPage ? undefined : href,
      };
    }
  );

  const currentPageTitle =
    pathSegments.length > 0
      ? capitalizeWords(
          pathSegments[pathSegments.length - 1].split("-").join(" ")
        )
      : "Home";

  return (
    <div
      className="w-full h-96 flex flex-col items-center justify-center gap-6"
      style={{
        backgroundImage: "url(/hero-1.webp)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-white">{currentPageTitle}</h1>
      <Breadcrumb items={breadcrumbItems} className="text-white" maxItems={3} />
    </div>
  );
};

export default HeroSmall;
