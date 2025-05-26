import CompanyApproaches from "@/components/templates/about-us/company-approaches";
import CompanyProfile from "@/components/templates/about-us/company-profile";
import FounderProfile from "@/components/templates/about-us/founder-profile";
import HeroSmall from "@/components/templates/hero-small";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";
import HomepageService from "@/components/templates/homepage/homepage-services";
import HomepageTeam from "@/components/templates/homepage/homepage-team";

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
