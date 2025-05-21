import HomepageAboutTitle from "@/components/features/homepage/homepage-about-title";
import HomepageAboutDetail from "@/components/features/homepage/homepage-about-detail";

const HomepageAbout = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-20 px-8 lg:px-16"
    >
      <div className="w-full 2xl:w-[1440px] lg:h-80 grid grid-cols-1 lg:grid-cols-2 relative">
        <HomepageAboutTitle />
        <HomepageAboutDetail />
      </div>
    </section>
  );
};

export default HomepageAbout;
