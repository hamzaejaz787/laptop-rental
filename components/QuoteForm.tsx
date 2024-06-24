"use client";

import React from "react";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const initialState = { message: "", errors: {} };

const QuoteForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formItems = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        startdate: formData.get("startdate"),
        enddate: formData.get("enddate"),
        company: formData.get("company"),
        location: formData.get("location"),
        phone: formData.get("phone"),
      };
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(formItems, null, 2)}
            </code>
          </pre>
        ),
      });
    }
  };
  return (
    <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
      <div className="flex items-center justify-between gap-4 w-full flex-col sm:flex-row flex-wrap">
        <FormItem className="relative flex-1 min-w-min w-full">
          <Label
            htmlFor="startdate"
            className="absolute top-0 left-[5%] bg-primary-red px-4"
          >
            Start Date *
          </Label>
          <DatePicker name="startdate" />
        </FormItem>

        <FormItem className="relative flex-1 min-w-min w-full">
          <Label
            htmlFor="enddate"
            className="absolute top-0 left-[5%] bg-primary-red px-4"
          >
            End Date *
          </Label>
          <DatePicker name="enddate" />
        </FormItem>
      </div>

      <FormItem className="relative">
        <Label
          htmlFor="name"
          className="absolute -top-2 left-[5%] bg-primary-red px-4"
        >
          Full Name *
        </Label>
        <Input
          placeholder="Enter Your Name"
          name="name"
          required
          className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 h-14"
        />
      </FormItem>

      <FormItem className="relative">
        <Label
          htmlFor="email"
          className="absolute -top-2 left-[5%] bg-primary-red px-4"
        >
          Email *
        </Label>
        <Input
          placeholder="Enter Your Email"
          name="email"
          type="email"
          required
          className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 h-14"
        />
      </FormItem>

      <FormItem className="relative">
        <Label
          htmlFor="phone"
          className="absolute -top-2 left-[5%] bg-primary-red px-4"
        >
          Phone Number *
        </Label>
        <Input
          placeholder="Enter Your Phone Number"
          name="phone"
          type="tel"
          required
          className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 h-14"
        />
      </FormItem>

      <FormItem className="relative">
        <Label
          htmlFor="company"
          className="absolute -top-2 left-[5%] bg-primary-red px-4"
        >
          Company *
        </Label>
        <Input
          placeholder="Enter Your Company Name"
          name="company"
          required
          className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 h-14"
        />
      </FormItem>

      <FormItem className="relative">
        <Label
          htmlFor="location"
          className="absolute -top-2 left-[5%] bg-primary-red px-4"
        >
          Location *
        </Label>
        <Input
          placeholder="Enter Your Location"
          name="location"
          required
          className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 h-14"
        />
      </FormItem>

      <FormItem className="relative">
        <Label
          htmlFor="message"
          className="absolute -top-2 left-[5%] bg-primary-red px-4"
        >
          Message
        </Label>
        <Textarea
          name="message"
          placeholder="Type your message here."
          className="bg-transparent border-2 border-white placeholder:text-white focus-visible:ring-offset-0 px-4 min-h-28"
        />
      </FormItem>

      <Button
        type="submit"
        className="bg-white text-primary-red w-full rounded hover:bg-red-400 hover:text-white text-base"
      >
        Submit
      </Button>
    </form>
  );
};

export default QuoteForm;

const DatePicker = ({ name }: { name: string }) => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "text-left w-full bg-transparent rounded border-2 border-white hover:text-primary-red",
            !date && "text-muted"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          classNames={{
            nav_button: "bg-primary-red text-white",
            day_selected:
              "bg-primary-red text-white hover:bg-red-500 focus:bg-red-500 hover:text-white focus:text-white",
          }}
        />
      </PopoverContent>
      {name && (
        <input
          type="hidden"
          name={name}
          value={date ? format(date, "yyyy-MM-dd") : ""}
        />
      )}
    </Popover>
  );
};
