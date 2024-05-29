import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export interface faqItemsProps {
  id: number;
  Question: string;
  Answer: string;
}

const Faqs = ({ faqItems }: { faqItems: faqItemsProps[] }) => {
  return (
    <section className="py-8 px-4 md:p-8 pt-14 w-full lg:max-w-3xl lg:mx-auto space-y-4">
      <h2 className="text-4xl uppercase text-center font-semibold">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 lg:mx-auto lg:max-w-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
        tempor incididunt ut labore et dolore.
      </p>

      <Accordion
        type="single"
        collapsible
        defaultValue={faqItems[0].Question}
        className="w-full space-y-4 pt-4"
      >
        {faqItems.map((faq, index) => (
          <div key={faq.id}>
            <AccordionItem
              value={faq.Question}
              className="px-4 border border-gray-300 data-[state=open]:border-red-500 transition-all rounded-sm"
            >
              <AccordionTrigger className="text-lg text-left font-bold hover:text-red-500 hover:no-underline data-[state=open]:text-red-500">
                {faq.Question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base">
                {faq.Answer}
              </AccordionContent>
            </AccordionItem>
            <Separator className="bg-custom-purple-300 h-[1.5px]" />
          </div>
        ))}
      </Accordion>
    </section>
  );
};

export default Faqs;
