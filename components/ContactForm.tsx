"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { handleContactForm } from "@/lib/actions";
import { useToast } from "./ui/use-toast";
import { useRef } from "react";
import { formSchema } from "@/lib/definitions";
import { useAction } from "next-safe-action/hooks";

export function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      location: "",
      message: "",
    },
  });

  const { status, execute, result } = useAction(handleContactForm, {
    onSuccess(data) {
      if (data.data?.success) {
        toast({
          title: "Success",
          description: data.data.message,
          variant: "success",
        });
        form.reset();
      }

      if (data.data?.error) {
        toast({
          title: "Error",
          description: data.data.error,
          variant: "destructive",
        });
      }
    },
    onError(error) {
      if (error.error.serverError) {
        toast({
          title: "An error occured on server",
          description: error.error.serverError,
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    execute(values);
  };

  return (
    <div className="flex flex-col py-10 gap-4 lg:w-4/5 mx-auto justify-between lg:flex-row ">
      <div className="w-full">
        <Form {...form}>
          <form
            className="space-y-4 sm:space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div className="flex items-center flex-wrap gap-4 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-fit">
                    <FormControl>
                      <Input placeholder="Your Name *" required {...field} />
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
                      <Input
                        placeholder="Your Email *"
                        type="email"
                        required
                        {...field}
                      />
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
                      <Input
                        placeholder="Contact Number"
                        type="tel"
                        {...field}
                      />
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
                      <Textarea
                        placeholder="Message"
                        {...field}
                        maxLength={350}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={status === "executing"}
              className={`bg-primary-red text-white hover:bg-red-500 px-8 md:px-14 w-full sm:w-auto`}
            >
              {status === "executing" ? "Sending..." : "Submit"}
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
          href="tel:+61390711839"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          +61-390-711-839
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <IoMail size={22} />
        <p className="text-center text-sm">Send us an Email</p>
        <Link
          href="mailto:hire@laptop-rental.com.au"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          Hire@laptop-rental.com.au
        </Link>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        <FaLocationDot size={22} />
        <p className="text-center text-sm">Visit Our Office</p>
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/TyGxcsfetCLd6SNRA"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          19B Hinkler Road Mordialloc, Mordialloc Victoria 3195, Australia{" "}
        </Link>
      </div> */}
    </div>
  );
};

export default ContactForm;
