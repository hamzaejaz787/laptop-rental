"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import ContactsOptions from "./ContactsOptions";

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
    <div className="flex flex-col mt-10 gap-4 w-[80%] m-auto justify-between lg:flex-row">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[49%]">
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
                  <FormItem className="w-[49%]">
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem className="w-[49%]">
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
                  <FormItem className="w-[49%]">
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
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="bg-[#D61837]">
              Contact Us
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-full rounded-sm bg-[#D61837] py-8 flex justify-center items-center lg:max-w-xs">
        <ContactsOptions />
      </div>
    </div>
  );
}

export default ContactForm;
