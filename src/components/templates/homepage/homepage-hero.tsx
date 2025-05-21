import HeroBackground from '@/components/features/homepage/hero-background';
import HomepageHeroText from '@/components/features/homepage/homepage-hero-text';

const HomepageHero = () => {
  return (
    <div className="w-full h-screen relative">
        <HeroBackground />
        <HomepageHeroText />
    </div>
  );
};

export default HomepageHero;