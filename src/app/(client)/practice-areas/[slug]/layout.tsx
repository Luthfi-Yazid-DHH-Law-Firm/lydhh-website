import ServicesSidebar from "@/components/features/our-services/services-sidebar";
import HeroSmall from "@/components/templates/hero-small";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Services | Jakarta International Law Office",
  description: "Jakarta International Law Office focus on delivering best solution to the client’s problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "jilo", "jilolaw", "jakarta", "indonesia"]
};

export default function ServiceDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <HeroSmall />
      <main className="w-full flex flex-col items-center justify-center">
        <div className="w-full 2xl:w-[1280px] py-10 md:px-10">
          <div className="w-full flex flex-col-reverse md:flex-row gap-8 justify-center">
            <div className="w-full md:w-1/4">
              <ServicesSidebar />
            </div>
            <div className="w-full md:w-3/4 p-3">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
