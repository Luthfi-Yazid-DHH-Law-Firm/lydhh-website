import EmblaCarousel from "@/components/composites/carousel";
import HomepageTeamTitle from "@/components/features/homepage/homepage-team-title";

const HomepageTeam = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full 2xl:w-[1440px] space-y-4 text-start px-8 lg:px-16">
        <HomepageTeamTitle />
        <EmblaCarousel slides={[0, 1, 2, 3, 4]} viewAllHref="/team"/>
      </div>
    </section>
  );
};

export default HomepageTeam;
