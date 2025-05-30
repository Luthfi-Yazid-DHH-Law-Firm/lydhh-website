import HeroSmall from "@/components/templates/hero-small";
import HomepageContact from "@/components/templates/homepage/homepage-contact";
import HomepageTeam from "@/components/templates/homepage/homepage-team";
import ServicesList from "@/components/templates/our-services/services-list";

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
