"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format, startOfToday } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendQuoteFormData, verifyRecaptcha } from "@/lib/actions";
import { useAction } from "next-safe-action/hooks";
import { quoteFormSchema } from "@/lib/definitions";
import { useCart } from "@/providers/CartContext";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const today = startOfToday();
type FormInputName = "name" | "email" | "phone" | "company" | "location";

interface FormInputItemTypes {
  name: FormInputName;
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
}

const formInputItems: FormInputItemTypes[] = [
  {
    name: "name",
    label: "Full Name *",
    placeholder: "Enter Your Name",
    required: true,
  },
  {
    name: "email",
    label: "Email *",
    placeholder: "Enter Your Email",
    required: true,
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number *",
    placeholder: "Enter Your Phone Number",
    required: true,
    type: "tel",
  },
  {
    name: "company",
    label: "Company Name *",
    placeholder: "Enter Your Company Name",
    required: true,
  },
  {
    name: "location",
    label: "Location *",
    placeholder: "Enter Your Location",
    required: true,
  },
];

const QuoteForm = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { cartItems, clearCart } = useCart();
  const formRef = React.useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useToast();
  const cartItemsString =
    cartItems.length > 0
      ? cartItems
          .map((item) => `${item.Title} (Quantity: ${item.quantity})`)
          .join("\n")
      : "";

  const form = useForm<z.infer<typeof quoteFormSchema>>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: cartItemsString,
      company: "",
      location: "",
      phone: "",
    },
  });

  const { status, execute } = useAction(sendQuoteFormData, {
    onSuccess(data) {
      if (data.data?.success) {
        toast({
          title: "Success",
          description: data.data.message,
          variant: "success",
        });
        clearCart();
        form.reset();
      }
      setIsSubmitting(false);
    },
    onError(error) {
      if (error.error) {
        toast({
          title: "An error occured",
          description: error.error.serverError,
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (values: z.infer<typeof quoteFormSchema>) => {
    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      return;
    }
    try {
      setIsSubmitting(true);
      const recaptchaToken = await executeRecaptcha("quote_form");
      const recaptchaResult = await verifyRecaptcha({ recaptchaToken });
      if (!recaptchaToken || !recaptchaResult?.data?.success) {
        toast({
          title: "Error",
          description: "reCAPTCHA verification failed",
          variant: "destructive",
        });
        return;
      }
      execute(values);
    } catch (error) {
      console.error("reCAPTCHA execution failed:", error);
      toast({
        title: "Error",
        description: "Failed to verify reCAPTCHA. Please try again.",
        variant: "destructive",
      });
    }
  };
  return (
    <Form {...form}>
      <form
        className="space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
        ref={formRef}
      >
        {" "}
        <div className="flex items-center justify-between gap-4 w-full flex-col sm:flex-row flex-wrap">
          <FormField
            control={form.control}
            name="startdate"
            render={({ field }) => (
              <FormItem className="relative flex-1 min-w-min w-full">
                <FormLabel className="absolute top-0 left-[5%] bg-primary-red px-4">
                  Start Date *
                </FormLabel>
                <FormControl>
                  <DatePicker
                    {...field}
                    selectedDate={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                      setStartDate(date);
                    }}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="enddate"
            render={({ field }) => (
              <FormItem className="relative flex-1 min-w-min w-full">
                <FormLabel className="absolute top-0 left-[5%] bg-primary-red px-4">
                  End Date *
                </FormLabel>
                <FormControl>
                  <DatePicker
                    {...field}
                    selectedDate={field.value}
                    onChange={field.onChange}
                    minDate={startDate}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
        </div>
        {formInputItems.map((item, index) => (
          <FormField
            key={index}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem className="relative flex-1 min-w-min w-full">
                <FormLabel className="absolute -top-1 left-[5%] bg-primary-red px-4">
                  {item.label}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={item.placeholder}
                    required={item.required}
                    type={item?.type || "text"}
                    {...field}
                    className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 h-14"
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
        ))}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative flex-1 min-w-min w-full">
              <FormLabel className="absolute -top-1 left-[5%] bg-primary-red px-4">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here"
                  className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 min-h-28"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={status === "executing" || isSubmitting}
          className="bg-white text-primary-red w-full rounded hover:bg-red-400 hover:text-white text-base"
        >
          {status === "executing" || isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default QuoteForm;

interface DatePickerProps {
  name: string;
  onChange: (date: Date | undefined) => void;
  selectedDate: Date | undefined;
  minDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  onChange,
  selectedDate,
  minDate,
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "text-left w-full bg-transparent rounded border-2 border-white hover:text-primary-red",
            !selectedDate && "text-muted"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? (
            format(selectedDate, "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(date) => {
            onChange(date);
            setCalendarOpen(false);
          }}
          initialFocus
          required
          fromDate={minDate || today}
          classNames={{
            nav_button: "bg-primary-red text-white",
            day_selected:
              "bg-primary-red text-white hover:bg-red-500 focus:bg-red-500 hover:text-white focus:text-white",
          }}
        />
      </PopoverContent>
      <input
        type="hidden"
        name={name}
        value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
      />
    </Popover>
  );
};
