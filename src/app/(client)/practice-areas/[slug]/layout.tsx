import ServicesSidebar from "@/components/features/our-services/services-sidebar";
import HeroSmall from "@/components/templates/hero-small";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Practice Areas | Luthfi Yazid DHH Law Firm",
  description:
      "Luthfi Yazid DHH Law Firm focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: [
    "law firm",
    "law",
    "dhh",
    "luthfi yazid",
    "jakarta",
    "indonesia",
    "firm",
    "law firm indonesia",
  ],
};

export default function ServiceDetailLayout({
                                              children,
                                            }: {
  children: ReactNode;
}) {
  return (
      <>
        <HeroSmall />

        <section className="relative w-full bg-[#f9f7f4] overflow-x-hidden">
          {/* Top gold divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

          <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr]">
            {/* Sidebar — fixed width column */}
            <div className="w-full">
              <ServicesSidebar />
            </div>

            {/* Main content */}
            <main className="w-full px-8 lg:px-14 py-12">
              {children}
            </main>
          </div>

          {/* Bottom gold divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </section>
      </>
  );
}