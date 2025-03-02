"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/src/providers/Cart";
import Link from "next/link";

const CartIcon = () => {
  const { totalItems } = useCart();
  return (
    <div className="badge">
      <span className="-ml-[20px] -mt-4 z-30 text-white bg-accent font-bold w-[17px] h-[17px] rounded-full text-xs flex justify-center items-center -pb-1">
        {totalItems}
      </span>
      <Link href={"/cart"}>
        <button className="btn btn-circle border-primary hover:text-gray-700">
          <ShoppingBagIcon className="size-6 " />
        </button>
      </Link>
    </div>
  );
};

export default CartIcon;
