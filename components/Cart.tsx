"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "@/providers/CartContext";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Popover>
      <PopoverTrigger className="relative">
        <MdAddShoppingCart size={20} />
        {cartItems?.length > 0 && (
          <span className="absolute -top-2 -right-1 text-sm bg-primary-red text-white rounded-full size-4 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </PopoverTrigger>
      <PopoverContent className="space-y-4 w-full" align="end">
        {cartItems.length > 0 ? (
          <>
            <h2 className="font-Barlow text-xl font-semibold">
              Items in Cart:
            </h2>
            <div className="space-y-2">
              {cartItems?.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-primary-red flex items-center gap-4 justify-between"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.Title}
                    width={65}
                    height={65}
                  />

                  <div className="max-w-[200px] mx-auto text-center">
                    <h4 className="">{item.Title}</h4>

                    <strong className="text-sm font-normal font-Barlow text-gray-600">
                      Quantity: {item.quantity}
                    </strong>
                  </div>

                  <Button
                    onClick={() => removeFromCart(item.id)}
                    variant="outline"
                    size="icon"
                    className="text-gray-500 hover:text-gray-600 focus:text-gray-600 cursor-pointer bg-transparent"
                  >
                    <FaTrashCan />
                  </Button>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="w-full rounded-sm bg-primary-red text-white hover:bg-red-500 focus-within:bg-red-500"
            >
              <Link href="/get-a-quote">Request Quote</Link>
            </Button>
          </>
        ) : (
          <div className="flex place-content-center">
            <h2 className="font-Barlow text-xl font-semibold text-gray-500">
              Your cart is empty
            </h2>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
