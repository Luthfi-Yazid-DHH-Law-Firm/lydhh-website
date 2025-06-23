import ServicesSidebar from "@/components/features/our-services/services-sidebar";
import HeroSmall from "@/components/templates/hero-small";
import { ReactNode } from "react";

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
