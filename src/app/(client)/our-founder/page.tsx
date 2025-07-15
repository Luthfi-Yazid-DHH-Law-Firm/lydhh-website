import FounderProfile from "@/components/templates/about-us/founder-profile";
import HeroSmall from "@/components/templates/hero-small";
import HomepageTeam from "@/components/templates/homepage/homepage-team";

export default async function FounderPage() {
  return (
    <>
        <HeroSmall />
        <FounderProfile />
        <HomepageTeam />
    </>
  );
};
