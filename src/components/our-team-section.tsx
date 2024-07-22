import Image from 'next/image';
import team from '../../public/team.png';

const OurTeamSection = () => {
  return (
    <section className="bg-[#F2F4F7] py-20 px-4 md:mb-0 mb-10">
      <div className="max-w-[76.375rem] mx-auto flex md:flex-row flex-col items-center gap-6 text-[#101828]">
        <div className="space-y-8 max-w-[37.5rem]">
          <h3 className="font-bold text-4xl">Our Team</h3>
          <p>
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="flex md:flex-row flex-col md:items-center w-full gap-4 py-2">
            <div className="space-y-2 w-[11.5rem]">
              <h3 className="font-bold text-5xl">28</h3>
              <p className="font-medium">team members</p>
            </div>
            <div className="space-y-2 w-[11.5rem]">
              <h3 className="font-bold text-5xl">+100</h3>
              <p className="font-medium">projects</p>
            </div>
            <div className="space-y-2 w-[11.5rem]">
              <h3 className="font-bold text-5xl">7 years</h3>
              <p className="font-medium">in IT sphere</p>
            </div>
          </div>
          <p className="font-medium">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It&apos;s
            expensive but worth it
          </p>
        </div>
        <div className="relative h-[300px] md:h-[25.5rem] w-full md:w-[37.5rem]">
          <Image
            alt="Team Image"
            src={team}
            placeholder="blur"
            className="object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
