import HomepageAbout from "@/components/templates/homepage/homepage-about";
import HomepageArticles from "@/components/templates/homepage/homepage-articles";
import HomepageContact from "@/components/templates/homepage/homepage-contact";
import HomepageHero from "@/components/templates/homepage/homepage-hero";
import HomepageService from "@/components/templates/homepage/homepage-services";
import HomepageTeam from "@/components/templates/homepage/homepage-team";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <main className="w-full">
        <HomepageAbout />
        <HomepageService />
        <HomepageTeam />
        <HomepageContact />
        <HomepageArticles />
      </main>
    </>
  );
}
