import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  author: string;
  price: number;
  image: string;
};

const Card = ({ title, author, price, image }: CardProps) => {
  return (
    <div className="flex gap-5 bg-[#F4F4FF] w-[320px] h-[200px] p-2">
      <Image
        src={image}
        alt="book"
        width={120}
        height={180}
        className="rounded-md"
      />
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-[#090937] text-xl">{title}</p>
          <p className="text-[#090937] text-base mt-1 font-light">{author}</p>
        </div>

        <p className="text-[#6251DD]">{price} ت</p>
      </div>
    </div>
  );
};

export default Card;
