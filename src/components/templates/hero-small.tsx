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

  // Check if the current path is under /articles
  const isArticlePage = pathSegments[0] === "articles";

  // If on any article page, show "Articles", otherwise show the current page title
  const currentPageTitle = isArticlePage
    ? "Articles"
    : pathSegments.length > 0
      ? capitalizeWords(
          pathSegments[pathSegments.length - 1].split("-").join(" ")
        )
      : "Home";

  return (
    <div
      className="w-full h-96 flex flex-col items-center justify-center gap-6"
      style={{
        backgroundImage: "url(/images/company-profile.webp)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-white text-center">
        {currentPageTitle}
      </h1>
      <Breadcrumb items={breadcrumbItems} className="text-white" maxItems={3} />
    </div>
  );
};

export default HeroSmall;
