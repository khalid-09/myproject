import ContactForm from '@/components/contact-form';
import Navbar from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import bgMobile from '../../public/bgMobile.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-[#F2F4F7] min-h-screen w-full relative overflow-hidden px-4 text-[#101828] "
    >
      <div className="md:max-w-[76.375rem] relative z-10 w-full mx-auto">
        <header className="fixed top-6">
          <Navbar />
        </header>
        <div className="max-w-[37.5rem] mt-48 space-y-5">
          <h1 className="font-semibold text-4xl tracking-[0.33px]">
            <span className="text-[#FFBA00] font-extrabold">
              User-Centric Excellence
            </span>
            <span className="font-bold"> : Our App Development services</span>{' '}
            Tackles Your Pain Points
          </h1>
          <p className="text-lg">
            Experience a Seamless Digital Journey with{' '}
            <span className="text-[#80A948]">Desun</span> - Where Every Line of
            Code Resolves Your Challenges and{' '}
            <span className="text-[#FFBA00]">
              {' '}
              Elevates Your App Experience
            </span>{' '}
            to Unparalleled Heights.
          </p>
        </div>
        <Card className="max-w-[42.25rem] mt-16 ">
          <CardHeader>
            <CardTitle className="font-bold text-xl text-[#101828]">
              Leave your contacts and we will call you back <br /> within 30
              minutes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm location="home" />
          </CardContent>
        </Card>
      </div>
      <div className="absolute hidden md:block inset-0 md:w-1/2 md:left-1/2">
        <Image
          src={bgMobile}
          alt="Bg Image"
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
