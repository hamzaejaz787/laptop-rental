"use client";

import { getCartFromServer, syncCartWithServer } from "@/lib/actions";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartItemType = {
  id: number;
  Title: string;
  quantity: number;
  imageUrl: string;
};

type CartContextType = {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeEntireItem: (id: number) => void;
  increaseItemQuantity: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadCart = async () => {
      const savedCart = localStorage.getItem("cart");
      const serverCart = await getCartFromServer();

      if (serverCart && serverCart !== "[]") {
        setCartItems(JSON.parse(serverCart));
        localStorage.setItem("cart", serverCart);
      } else if (savedCart) {
        setCartItems(JSON.parse(savedCart));
        await syncCartWithServer(savedCart);
      }
      setIsLoaded(true);
    };

    loadCart();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      syncCartWithServer(JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const updateLocalStorage = (items: CartItemType[]) => {
    if (typeof window !== undefined) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  };

  //Add items to cart
  const addToCart = (item: CartItemType) => {
    setCartItems((prevCart) => {
      //Check if item already exists in the cart
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      let newCart;
      if (existingItem) {
        newCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        newCart = [...prevCart, { ...item, quantity: 1 }];
      }
      updateLocalStorage(newCart);

      return newCart;
    });
  };

  //Remove from the cart
  const removeFromCart = (id: number) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id);
      let newCart;
      if (existingItem && existingItem.quantity > 1) {
        newCart = prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        newCart = prevCart.filter((cartItem) => cartItem.id !== id);
      }
      updateLocalStorage(newCart);
      return newCart;
    });
  };

  const removeEntireItem = (id: number) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    // Update localStorage
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateLocalStorage(newCart);
      return newCart;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        removeFromCart,
        increaseItemQuantity,
        clearCart,
        removeEntireItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("useCart must be used within a CartProvider");

  return context;
}
