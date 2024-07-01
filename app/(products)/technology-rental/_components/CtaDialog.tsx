import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const CtaDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-center font-Poppins bg-primary-red text-white mx-auto text-lg hover:bg-red-500 focus-within:bg-red-500 px-10 md:px-10 rounded-sm capitalize">
          Request A Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white my-4 bg-primary-red w-4/5 md:w-full mx-auto">
        <DialogTitle>Request A Quote</DialogTitle>
        <QuoteForm />
      </DialogContent>
    </Dialog>
  );
};

export default CtaDialog;
