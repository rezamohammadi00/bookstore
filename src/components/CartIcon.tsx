"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/src/providers/Cart";
import Link from "next/link";

const CartIcon = () => {
  const { totalItems } = useCart();
  return (
    <div className="badge">
      <span className="-ml-4 -mt-2 z-30 text-accent font-bold">
        {totalItems}
      </span>
      <Link href={"/cart"}>
        <button className="btn btn-circle border-primary hover:text-gray-700">
          <ShoppingBagIcon className="size-6" />
        </button>
      </Link>
    </div>
  );
};

export default CartIcon;
