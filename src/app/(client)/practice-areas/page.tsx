import HeroSmall from "@/components/templates/hero-small";
import HomepageContact from "@/components/templates/homepage/homepage-contact";
import HomepageTeam from "@/components/templates/homepage/homepage-team";
import ServicesList from "@/components/templates/our-services/services-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Luthfi Yazid & DHH Law Firm",
  description: "Jakarta International Law Office focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "dhh", "luthfi yazid", "jakarta", "indonesia", "firm", "law firm indonesia"]
};

export default function ServicesPage() {
  return (
    <>
      <HeroSmall />
      <ServicesList />
      <HomepageContact />
      <HomepageTeam />
    </>
  )
}
