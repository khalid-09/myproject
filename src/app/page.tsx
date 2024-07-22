import ApplicationSection from '@/components/application-section';
import DiscussSection from '@/components/discuss-section';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import OurTeamSection from '@/components/our-team-section';
import ProjectsSection from '@/components/projects-section';
import TechSection from '@/components/tech-section';

const Page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <DiscussSection />
      <ApplicationSection />
      <OurTeamSection />
      <FaqSection />
      <Footer />
    </>
  );
};
export default Page;
