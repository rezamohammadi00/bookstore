"use client";

import { useCart } from "@/src/providers/Cart";
import CartItem from "@/src/components/CartItem";
const CartItemsList = () => {
  const {
    cartItems,
    //  totalPrice
  } = useCart();

  console.log(cartItems);
  if (cartItems.length === 0) {
    return (
      <div className="w-full mt-4">
        <span className="font-bold border-b-2 border-primary">
          سبد شما خالی است.
        </span>
      </div>
    );
  }
  return (
    <div className="flex-grow">
      {cartItems.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default CartItemsList;
