"use client";

import { useCart } from "@/src/providers/Cart";
import { useState } from "react";

const OrderBox = () => {
  const { totalPrice } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState("");

  const applyDiscount = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: discountCode }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setPercentage(data.percentage);
    } catch (err) {
      setError((err as Error).message);

      setTimeout(() => {
        setError("");
        setDiscountCode("");
      }, 3000);
    }
  };

  return (
    <div className="w-full md:w-1/3">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">مجموع قیمت شفارش‌ها</h2>
          <div className="text-lg font-semibold mt-4">
            {/* ---------------percentage-------------------- */}
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="کد تخفیف خود را وارد کنید"
                className={`input input-bordered w-full max-w-xs placeholder:text-sm placeholder:lg:text-lg  ${
                  error && "text-red-500"
                }`}
                value={error ? error : discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                className="btn btn-outline btn-primary text-white"
                onClick={applyDiscount}
                disabled={percentage && discountCode ? true : false}
              >
                اعمال
              </button>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              {/* ---------------total-------------------- */}
              <span className="font-normal text-sm">
                مجموع سبد شما بدون تخیف:
                <span className="text-primary font-bold mr-1 text-lg line-through ml-[2px]">
                  {totalPrice.toLocaleString()}
                </span>
                تومان
              </span>

              {/* ---------------total-------------------- */}
              <span className="font-normal text-sm">
                مجموع سبد شما بااعمال تخفیف:
                <span className="text-primary font-bold mr-1 text-lg ml-[2px]">
                  {(
                    totalPrice -
                    (totalPrice * percentage) / 100
                  ).toLocaleString()}
                </span>
                تومان
              </span>
            </div>
          </div>

          <button className="btn btn-primary mt-4 text-white">
            ادامه خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
