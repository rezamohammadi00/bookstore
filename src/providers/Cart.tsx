"use client";

import {
  createContext,
  type ReactNode,
  useReducer,
  useContext,
  useEffect,
} from "react";
import type { CardProps } from "@/src/components/Card";

// Define the CartItem type
export type CartItem = CardProps & { quantity: number };

// Define the CartContext type
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

// Create the context
export const CartContext = createContext<CartContextType | null>(null);

// Load cart from localStorage
const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Define the cart reducer actions
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

// Cart reducer function
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  let newState: CartItem[];
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        newState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newState = [...state, action.payload];
      }
      break;
    }

    case "REMOVE_ITEM":
      newState = state.filter((item) => item.id !== action.payload);
      break;

    case "UPDATE_QUANTITY":
      newState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      break;

    case "CLEAR_CART":
      newState = [];
      break;

    default:
      return state;
  }

  // Update localStorage when the cart changes
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(newState));
  }
  return newState;
};

// CartProvider component
type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    [],
    loadCartFromLocalStorage
  );

  // Update localStorage whenever cartItems change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

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

  // Cart actions
  const addToCart = (item: CartItem) =>
    dispatch({ type: "ADD_ITEM", payload: item });
  const removeFromCart = (id: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });
  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Provide the context value
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
