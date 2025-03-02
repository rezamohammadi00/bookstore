import { Metadata } from "next";

import Card from "@/src/components/Card";
import Container from "@/src/components/Container";
import type { CardProps } from "@/src/components/Card";
import FilterBox from "@/src/components/FilterBox";
import Pagination from "@/src/components/Pagination";

// import db from "@/src/app/api/products/db";

// export const dynamic = "force-dynamic";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
};

export const metadata: Metadata = {
  title: "کتاب‌ها",
};


type Props = { searchParams: Promise<{ page: string, filter: string, genre: string }> }

const ProductsPage = async ({ searchParams }: Props) => {


  //TODO: sent params to the API 
  const page = (await searchParams).page ?? 0
  const filter = (await searchParams).filter ?? ""
  const genre = (await searchParams).genre ?? "all"
  console.log("searchParams of products page", {
    params: {
      page,
      filter,
      genre
    }
  })

  const products: CardProps[] = await getProducts();


  return (
    <main className="min-h-screen">
      <Container>
        <div className="bg-base-200 flex flex-col items-center pt-4">
          <FilterBox />
          <div className="flex flex-wrap gap-6 justify-center py-4">
            {products.map((product) => (
              <Card {...product} key={product.id} />
            ))}
          </div>
          <div className="mb-8 mt-2">
            <Pagination />
          </div>
        </div>
      </Container>
    </main>
  );
};
export default ProductsPage;
