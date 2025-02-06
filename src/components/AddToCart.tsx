"use client";
import { useRef } from "react";
import { useSession } from "next-auth/react";
import type { CardProps } from "@/src/components/Card";
import { useCart } from "@/src/providers/Cart";

const AddToCart = ({ name, id, image, description, price }: CardProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { addToCart } = useCart();
  const { data: session } = useSession();

  if (!session)
    return (
      <>
        <button
          className="btn btn-primary text-white"
<<<<<<< HEAD
          onClick={() => dialogRef.current?.showModal()}
=======
          //onClick={() => document.getElementById("my_modal_2").showModal()}
>>>>>>> 86a19398b74749aacaecd455c3eccdc2e26fd53a
        >
          خریدن
        </button>
        <dialog ref={dialogRef} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-600">متاسفم🙏</h3>
            <p className="py-4">
              برای افزودن کتابی به سبد خرید خود ابتدا باید به حساب خود وارد شوید
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">بستن</button>
              </form>
            </div>
          </div>
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
          quantity: 1,
        })
      }
    >
      خریدن
    </button>
  );
};

export default AddToCart;
