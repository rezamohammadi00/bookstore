import { Metadata } from "next";

import Card from "@/src/components/Card";
import Container from "@/src/components/Container";
import type { CardProps } from "@/src/components/Card";
import FilterBox from "@/src/components/FilterBox";

import db from "@/src/app/api/products/db";

// export const dynamic = "force-dynamic";

// const getProducts = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   return res.json();
// };


export const metadata: Metadata = {
  title: "کتاب‌ها",
};

const ProductsPage = async () => {
  // const products: CardProps[] = await getProducts();
  const products: CardProps[] = db;

  return (
    <main className="min-h-screen">
      <Container>
        <FilterBox />
        <div className="flex flex-wrap gap-6 justify-center py-4  bg-base-200 ">
          {products.map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </div>
      </Container>
    </main>
  );
};
export default ProductsPage;
