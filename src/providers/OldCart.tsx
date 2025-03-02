"use client";

import { createContext, type ReactNode, useReducer, useContext } from "react";
import type { CardProps } from "@/src/components/Card";

// Define the CartItem type (assuming it matches CardProps)
export type CartItem = CardProps & { quantity: number };

// Define the CartContext type
type CartContextType = {
  cartItems: CartItem[]; // List of items in the cart
  addToCart: (item: CartItem) => void; // Function to add an item to the cart
  removeFromCart: (id: string) => void; // Function to remove an item from the cart
  updateQuantity: (id: string, quantity: number) => void; // Function to update item quantity
  clearCart: () => void; // Function to clear the cart
  totalItems: number; // Total number of items in the cart
  totalPrice: number; // Total price of all items in the cart
};

// Create the context
export const CartContext = createContext<CartContextType | null>(null);

// Define the cart reducer actions
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

// Cart reducer function
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, action.payload];
    }

    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "UPDATE_QUANTITY": {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }

    case "CLEAR_CART": {
      return [];
    }

    default: {
      return state;
    }
  }
};

// CartProvider component
type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Add an item to the cart
  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  // Remove an item from the cart
  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  // Clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Value to be provided by the context
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
