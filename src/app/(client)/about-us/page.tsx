import CompanyApproaches from "@/components/templates/about-us/company-approaches";
import CompanyProfile from "@/components/templates/about-us/company-profile";
import HeroSmall from "@/components/templates/hero-small";
import HomepageTeam from "@/components/templates/homepage/homepage-team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Luthfi Yazid DHH Law Firm",
  description: "Luthfi Yazid DHH Law Firm focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "dhh", "luthfi yazid", "jakarta", "indonesia", "firm", "law firm indonesia"]
};

export default function AboutPage() {
  return (
    <>
      <HeroSmall />
      <CompanyProfile />
      <CompanyApproaches />
      <HomepageTeam />
    </>
  );
}
