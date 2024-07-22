import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import plan from '../../public/plan.png';
import mainMobile from '../../public/mainMobile.png';
import { applications } from '@/constant/applications';
import ApplicationCard from './application-card';

const ApplicationSection = () => {
  return (
    <section className="p-20">
      <div className="max-w-[76.375rem] mx-auto text-[#101828]">
        <h3 className="text-4xl text-center md:text-start font-bold">
          Application development stages
        </h3>
        <div className="flex items-center mt-10 gap-6 md:gap-0 md:flex-row flex-col">
          <div className="w-[24.5rem] space-y-6">
            {applications.slice(0, 3).map(application => (
              <ApplicationCard
                img={application.img}
                content={application.content}
                title={application.title}
                key={application.title}
              />
            ))}
          </div>
          <div className="w-[27.5rem] h-[36.5rem] relative">
            <Image
              src={mainMobile}
              alt="Mobile Image"
              fill
              className="object-cover absolute"
              placeholder="blur"
            />
          </div>
          <div className="w-[24.5rem] space-y-6">
            {applications.slice(3).map(application => (
              <ApplicationCard
                img={application.img}
                content={application.content}
                title={application.title}
                key={application.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
