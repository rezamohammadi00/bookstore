import Image from "next/image";
// import React from "react";

import Link from "next/link";

export type CardProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  id: string;
};

const Card = ({ name, description, price, image, id }: CardProps) => {

  return (
    <Link href={`/products/${id}`}>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          {/* <img src={"/images/fake2.jpg"} alt="Shoes" /> */}
          <Image
            src={image}
            // src={"/images/fake2.jpg"}
            alt="Shoes"
            width={384}
            height={200}
            className="w-[384px] h-[200px] object-scale-down pt-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between items-center">
            <span className="font-bold border-b border-primary">
              {price.toLocaleString()} تومان
            </span>
            <button className="btn btn-primary text-white">جزئیات</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
