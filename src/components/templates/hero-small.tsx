"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "../ui/breadcrumbs";
import { capitalizeWords } from "@/lib/capitalizeFirstLetter";

const HeroSmall = () => {
  const path = usePathname();
  const title = path.split("/")[1].split("-").join(" ");

  return (
    <div
      className="w-full h-96 flex flex-col items-center justify-center gap-6"
      style={{
        backgroundImage: "url(/hero-1.webp)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-white">{capitalizeWords(title)}</h1>
      <Breadcrumb
        items={[{ label: capitalizeWords(title), href: path }]}
        className="text-white"
      />
    </div>
  );
};

export default HeroSmall;
