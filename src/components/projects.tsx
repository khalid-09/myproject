import Image from 'next/image';
import location from '../../public/location.png';
import work from '../../public/work.png';
import ios from '../../public/ios.png';
import play from '../../public/play.png';
import mobile from '../../public/mobile.png';

const Projects = () => {
  return (
    <div className="space-y-20 mt-32 text-[#101828]">
      <div className="max-w-[37.5rem] space-y-6">
        <h2 className="font-bold text-4xl">Projects we are proud of</h2>
        <p className="font-medium">
          Our software development company is truly proud of the wonderful
          clients we have worked with. We enjoy a long-term partnership
        </p>
      </div>
      <div className="space-y-10">
        <div className="py-3 w-fit">
          <span className="px-3 cursor-pointer font-medium underline decoration-[#FFBA00] underline-offset-8">
            Project 1
          </span>
          <span className="px-3 cursor-pointer">Project 2</span>
          <span className="px-3 cursor-pointer">Project 3</span>
          <span className="px-3 cursor-pointer">Project 4</span>
        </div>
        <div className="flex gap-6">
          <div className="max-w-[47.125rem] space-y-8">
            <h2 className="font-bold text-4xl">Project 1</h2>
            <div className="max-w-[37.5rem] space-y-10">
              <p className="text-lg">
                Crafted an innovative rental property management app, seamlessly
                integrating secure login, absence registration, and a tenant
                notice board. Elevating the resident experience with
                user-friendly design and efficient communication channels
              </p>
              <p className="text-[#475467]">
                Business analysis/ iOS / Android / QA / UI/UX Design
              </p>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <Image
                      src={location}
                      alt="Location Icon"
                      fill
                      className="object-cover absolute"
                      placeholder="blur"
                    />
                  </div>
                  <span>India</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <Image
                      src={work}
                      alt="Work Icon"
                      fill
                      className="object-cover absolute"
                      placeholder="blur"
                    />
                  </div>
                  <span>Real Estate</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="space-y-2">
                  <h6 className="font-bold text-2xl">400%</h6>
                  <p className="text-[#667085]">User Growth</p>
                </div>
                <div className="space-y-2">
                  <h6 className="font-bold text-2xl">+200 000</h6>
                  <p className="text-[#667085]">Actice Users</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative  w-[9.25rem] h-[2.5rem]">
                  <Image
                    src={ios}
                    alt="App Store Image"
                    fill
                    placeholder="blur"
                    className="object-cover absolute "
                  />
                </div>
                <div className="relative rounded-md overflow-hidden w-[9.25rem] h-[2.5rem]">
                  <Image
                    src={play}
                    alt="Play Store Image"
                    fill
                    placeholder="blur"
                    className="object-cover absolute "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:block hidden h-[27.875rem] w-[27.875rem]">
            <Image
              src={mobile}
              alt="Mobile Image"
              fill
              className="object-cover absolute"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
