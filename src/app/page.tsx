import ApplicationSection from '@/components/application-section';
import DiscussSection from '@/components/discuss-section';
import HeroSection from '@/components/hero-section';
import OurTeamSection from '@/components/our-team-section';
import ProjectsSection from '@/components/projects-section';
import TechSection from '@/components/tech-section';

const Page = () => {
  return (
    <>
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <DiscussSection />
      <ApplicationSection />
      <OurTeamSection />
    </>
  );
};
export default Page;
