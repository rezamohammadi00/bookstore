"use client";

import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CartItem as CartItemT, useCart } from "@/src/providers/Cart";
import Link from "next/link";

const CartItem = ({
  id,
  price,
  name,
  quantity,
  image,
  description,
}: CartItemT) => {
  const { removeFromCart, addToCart } = useCart();

  return (
    <div key={id} className="card bg-base-100 shadow-xl mb-4 relative w-full">
      <img
        src={image}
        alt=""
        className="absolute left-4 top-4 lg:w-28 w-28 h-40  object-cover"
      />
      <div className="card-body">
        <Link href={"/products/" + id}>
          <h2 className="card-title font-bold">{name}</h2>
        </Link>
        <p className="text-sm">
          {/* <span className="font-normal text-lg ml-1">{price.toFixed(2)}</span> */}
          <span className="font-normal text-lg ml-1">
            {price.toLocaleString()}
          </span>
          تومان
        </p>
        <div className="flex items-center mt-2">
          <button
            className="btn btn-circle btn-sm"
            onClick={() => {
              if (quantity == 1) {
                removeFromCart(id);
              } else {
                addToCart({
                  id,
                  price,
                  name,
                  quantity: -1,
                  description,
                  image,
                });
              }
            }}
          >
            <MinusIcon className="size-6 text-error" />
          </button>
          <span className="mx-2 text-lg">{quantity}</span>
          <button
            className="btn btn-circle btn-sm"
            onClick={() =>
              addToCart({ id, price, name, quantity: 1, description, image })
            }
          >
            <PlusIcon className="size-6 text-success" />
          </button>
          <button
            className="btn btn-ghost btn-circle ml-4"
            onClick={() => removeFromCart(id)}
          >
            <TrashIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
