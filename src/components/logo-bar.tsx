import Image from 'next/image';
import logoBar from '../../public/logoBar.png';

const LogoBar = () => {
  return (
    <div className="px-[3.75rem] py-[3.438rem] w-full">
      <div className="border-y border-[#D8D8D8] py-[3.75rem] flex w-full items-center justify-center gap-4 md:gap-0 md:justify-between flex-wrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="relative w-[10.228rem] h-[4.5rem]">
            <Image
              src={logoBar}
              alt="Logo Image"
              fill
              placeholder="blur"
              className="object-cover absolute"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
