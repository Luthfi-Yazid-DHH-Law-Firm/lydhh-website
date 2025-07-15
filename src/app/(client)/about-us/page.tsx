import CompanyApproaches from "@/components/templates/about-us/company-approaches";
import CompanyProfile from "@/components/templates/about-us/company-profile";
import FounderProfile from "@/components/templates/about-us/founder-profile";
import HeroSmall from "@/components/templates/hero-small";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";
import HomepageService from "@/components/templates/homepage/homepage-services";
import HomepageTeam from "@/components/templates/homepage/homepage-team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Jakarta International Law Office",
  description: "Jakarta International Law Office focus on delivering best solution to the client’s problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "jilo", "jilolaw", "jakarta", "indonesia"]
};

export default function AboutPage() {
  return (
    <>
      <HeroSmall />
      <CompanyProfile />
      <CompanyApproaches />
      <FounderProfile />
      <HomepageTeam />
      <HomepageService />
      <HomepageArticles />
    </>
  );
}
