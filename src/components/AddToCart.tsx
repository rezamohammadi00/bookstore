"use client";
import { useSession } from "next-auth/react";

import type { CardProps } from "@/src/components/Card";
import { useCart } from "@/src/providers/Cart";

const AddToCart = ({ name, id, image, description, price }: CardProps) => {
  const { addToCart } = useCart();
  const { data: session } = useSession();

  if (!session)
    return (
      <>
        <button
          className="btn btn-primary text-white"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          خریدن
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-600">متاسفم🙏</h3>
            <p className="py-4">
              برای افزودن کتابی به سبد خرید خود ابتدا باید به حساب خود وارد شوید
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </>
    );

  return (
    <button
      className="btn btn-primary text-white"
      onClick={() =>
        addToCart({
          name,
          image,
          id,
          description,
          price,
          quantity: 1, //That is, add one of these item to your cart.
        })
      }
    >
      خریدن
    </button>
  );
};

export default AddToCart;
