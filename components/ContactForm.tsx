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
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "./ui/use-toast";
import { useRef } from "react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Cannot be empty" }),
  email: z.string().email().min(1, { message: "Cannot be empty" }),
  contact: z.coerce
    .number({
      invalid_type_error: "Invalid Number!",
    })
    .positive()
    .gte(11, { message: "Number required" }),
  company: z.string().optional(),
  location: z.string().optional(),
  message: z
    .string()
    .max(350, { message: "Message cannot be longer than 350 characters" }),
});

export type ContactFormFields = z.infer<typeof formSchema>;

const initialState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction] = useFormState(handleContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const form = useForm<ContactFormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      location: "",
      message: "",
    },
  });

  return (
    <div className="flex flex-col py-10 gap-4 lg:w-4/5 mx-auto justify-between lg:flex-row ">
      <div className="w-full">
        <Form {...form}>
          <form
            className="space-y-4 sm:space-y-8"
            action={async (formData: FormData) => {
              formAction(formData);
              if (state.success === true) {
                toast({
                  title: "Success",
                  variant: "success",
                  description: state.message,
                });
              } else if (state.success === false) {
                toast({
                  title: "Error",
                  variant: "destructive",
                  description: state.message,
                });
              }

              formRef.current?.reset();
            }}
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
              disabled={pending}
              aria-disabled={pending}
              className={`bg-primary-red text-white hover:bg-red-500 px-8 md:px-14 w-full sm:w-auto ${
                pending ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {pending ? "Sending..." : "Submit"}
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
          href="tel:+61(0)383730303"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          +61-383-730303
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <IoMail size={22} />
        <p className="text-center text-sm">Send us an Email</p>
        <Link
          href="mailto:laptop@gmail.com"
          className="text-center font-semibold transition-all duration-200 hover:text-red-300"
        >
          laptop@gmail.com
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
