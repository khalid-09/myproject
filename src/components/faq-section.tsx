import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  return (
    <section id="faq" className="px-4">
      <div className="max-w-[76.375rem] mx-auto py-20 space-y-10">
        <h3 className="font-bold text-4xl">FAQ</h3>
        <Accordion
          type="single"
          collapsible
          className="w-full flex items-center md:flex-row flex-col gap-0 md:gap-6"
        >
          <div className="w-full border-t">
            <AccordionItem value="item-1" className="">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="w-full md:border-t">
            <AccordionItem value="item-3" className="">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
