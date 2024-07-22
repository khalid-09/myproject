import ContactForm from './contact-form';
import { Card, CardContent } from './ui/card';

const DiscussSection = () => {
  return (
    <section
      id="contacts"
      className="bg-gradient-to-r from-[#FABC1F] to-[#7CA546] p-14"
    >
      <div className="max-w-[76.375rem] mx-auto flex md:flex-row flex-col justify-between">
        <div className="text-white max-w-[37.5rem] space-y-6">
          <h2 className="font-bold text-4xl">
            Let&apos;s discuss <br /> Your project
          </h2>
          <p>
            Let&apos;s figure out how to create an effective application,
            <br /> its cost and terms of its development
          </p>
        </div>
        <Card className="max-w-[32.5rem] p-0 md:pt-6 md:px-6">
          <CardContent>
            <ContactForm location="discuss" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DiscussSection;
