"use client";

import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CartItem as CartItemT, useCart } from "@/src/providers/Cart";

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
    <div key={id} className="card bg-base-100 shadow-xl mb-4 ">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">تومان {price.toFixed(2)}</p>
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
            <MinusIcon className="size-6" />
          </button>
          <span className="mx-2 text-lg">{quantity}</span>
          <button
            className="btn btn-circle btn-sm"
            onClick={() =>
              addToCart({ id, price, name, quantity: 1, description, image })
            }
          >
            <PlusIcon className="size-6" />
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
