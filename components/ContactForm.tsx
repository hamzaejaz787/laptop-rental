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
      <div className="w-[100%] md:w-[100%] flex-grow lg:w-[68%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[49%]">
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-[49%]">
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Contact Number" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="w-[49%]">
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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
                    {/* <FormLabel>Username</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Location" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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
                      {/* <Input placeholder="Message" {...field} /> */}
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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
      <div className="w-[100%] rounded-sm flex-grow bg-[#D61837] py-8 flex justify-center items-center lg:w-[30%] ">
        <ContactsOptions />
      </div>
    </div>
  );
}

export default ContactForm;
