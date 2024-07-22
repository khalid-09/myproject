import Industry from './industry';
import Projects from './projects';

const ProjectsSection = () => {
  return (
    <section className="px-4 pt-20 pb-14 bg-[#F2F4F7] text-[#101828]">
      <div className="max-w-[76.375rem] mx-auto">
        <Industry />
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsSection;
