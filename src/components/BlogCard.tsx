import React from "react";
import Blog from "@/src/types/blog";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

const BlogCard = ({ title, description, id }: Blog) => {
  return (
    <Link href={"/blogs/" + id}>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          {/* <img src={"/images/fake2.jpg"} alt="Shoes" /> */}
          <Image
            src={"/images/fake2.jpg"}
            alt="Shoes"
            width={384}
            height={200}
            className="!h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="line-clamp-5 leading-loose text-right">
            {description}
          </p>
          <button className="btn btn-primary mt-2 btn-outline hover:text-white">
            خواندن
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
