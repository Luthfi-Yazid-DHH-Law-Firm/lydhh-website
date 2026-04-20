import LinkButton from "@/components/ui/link";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  weight: ["600"],
  style: ["italic"],
  subsets: ["latin"],
  preload: false,
});

const HomepageServicesTitle = () => {
  return (
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        {/* Left: eyebrow + heading */}
        <div className="flex-shrink-0">
          <p className="text-[#c9a84c] text-xs tracking-[0.24em] uppercase font-medium mb-3">
            Our Practice Areas
          </p>
          <h2 className="text-white text-2xl lg:text-3xl font-light leading-snug">
            We are here to fight against any violence with{" "}
            <span className={`${ebGaramond.className} italic text-[#c9a84c]`}>
            experience
          </span>
          </h2>
        </div>

        {/* Gold divider line */}
        <div className="flex-1 h-px bg-[#c9a84c]/20 hidden lg:block mx-8" />

        {/* Explore All button */}
        <LinkButton
            href="/practice-areas"
            underline={false}
            className="flex-shrink-0 border border-[#c9a84c]/35 bg-[#c9a84c]/[0.05] hover:bg-[#c9a84c]/12 hover:border-[#c9a84c]/60 text-[#c9a84c] text-[11px] tracking-[0.14em] uppercase px-5 py-2.5 transition-all duration-200"
        >
          Explore All →
        </LinkButton>
      </div>
  );
};

export default HomepageServicesTitle;