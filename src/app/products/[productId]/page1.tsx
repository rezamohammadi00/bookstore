import Image from "next/image";

import type { CardProps } from "@/src/components/Card";
import AddToCart from "@/src/components/AddToCart";

const getProduct = async (productId: string) => {
  const res = await fetch("http://localhost:3000/api/products/" + productId);
  return res.json();
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  const product: CardProps = await getProduct(productId);
  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="lg:w-1/2">
            <Image
              src={"/images/shoes.webp"}
              alt="Product"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-3xl font-bold">{product.name}</h2>
            <div className="flex items-center mt-2">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="ml-2 text-sm text-gray-500">
                (4.0) 120 بازدید کنندگان
              </span>
            </div>
            <p className="text-2xl font-semibold mt-4">{product.price} تومان</p>
            {/* <p className="mt-4">{product.description}</p>*/}
            <p className="lg:-mt-16">{product.description}</p>
            <div className="card-actions justify-end mt-6">
              <AddToCart {...product} />
              {/* <button className="btn btn-outline btn-secondary">Buy Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
