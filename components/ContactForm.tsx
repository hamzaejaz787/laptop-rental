"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export function ContactForm() {
  const form = useForm();
  const onSubmit = () => {
    console.log("Form Submitted.");
  };
  return (
    <div className="flex flex-col py-10 gap-4 lg:w-4/5 mx-auto justify-between lg:flex-row ">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-center flex-wrap gap-4 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-fit">
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-fit">
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4 w-full items-center flex-wrap">
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-fit">
                    <FormControl>
                      <Input placeholder="Contact Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-fit">
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Location" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="bg-primary-red text-white hover:bg-red-500 md:px-14">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-full rounded-sm bg-primary-red py-8 flex justify-center items-center lg:max-w-xs">
        <ContactsOptions />
      </div>
    </div>
  );
}

const ContactsOptions = () => {
  return (
    <div className="text-white gap-6 w-full flex flex-row flex-wrap justify-center items-center lg:flex-col px-8">
      <div className="flex flex-col justify-center items-center gap-1">
        <FaPhone size={22} />
        <p className="text-center text-sm">Lets Have a Call</p>
        <Link
          href="tel:+923331231234"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          +92 333 123 1234
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <IoMail size={22} />
        <p className="text-center text-sm">Send us an Email</p>
        <Link
          href="mailto:laptoprental@gmail.com"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          laptoprental@gmail.com
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaLocationDot size={22} />
        <p className="text-center text-sm">Visit Our Office</p>
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/cFzM7gbaxUWUrE9D7"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          2508 Sydney, TX 78746 Australia
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
