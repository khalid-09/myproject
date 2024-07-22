import Image from 'next/image';
import { industry, industry as industryList } from '@/constant/industries';

const Industry = () => {
  return (
    <>
      <h2 className="font-bold text-4xl">
        Developed more than <span className="text-[#80A948]">100</span>
        <br /> projects in <span className="text-[#80A948]">15</span> industries
      </h2>
      <div className="mt-10 flex md:flex-row flex-col   gap-[25px]">
        {industryList.map((industry, i) => (
          <div
            key={i}
            className="md:w-[391px] w-full flex  flex-col  gap-4 space-y-4"
          >
            {industry.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex items-center justify-center h-11 w-11 rounded-full bg-white">
                  <div className="relative h-6 w-6">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover absolute"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Industry;
