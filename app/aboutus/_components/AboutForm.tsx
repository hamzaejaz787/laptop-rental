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
// import { Textarea } from "./ui/textarea";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export function AboutForm() {
  const form = useForm();
  const onSubmit = () => {
    console.log("Form Submitted.");
  };
  return (
    <div className="flex flex-col mt-10 md:mt-14 lg:mt-20 gap-4 w-[70%] m-auto justify-between lg:flex-row">
      <div className="w-[100%] md:w-[100%] flex-grow lg:w-[68%]">
        <div>
          <h2 className="text-4xl mb-3 font-bold text-center">
            Leave Your Review
          </h2>
          <p className="text-sm text-center mb-8">
            Your Feedback Matters! Share your experience with Laptop Rental. We
            value your insights and look forward to hearing about the impact of
            our cutting-edge technology and top-notch services on your events.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-[49%]">
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        className="py-6"
                        {...field}
                      />
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
                      <Input
                        placeholder="Your Email"
                        className="py-6"
                        {...field}
                      />
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
                      <Textarea placeholder="Message" className="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="bg-[#D61837] w-full py-6">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default AboutForm;
