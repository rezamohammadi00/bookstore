import Card from "@/src/components/Card";
import Container from "@/src/components/Container";
import type { CardProps } from "@/src/components/Card";
import FilterBox from "@/src/components/FilterBox";


// export const dynamic = "force-dynamic";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
};

const ProductsPage = async () => {
  const products: CardProps[] = await getProducts();
  // console.log(products);
  return (
    <main className="min-h-screen">
      <Container>
        {/* <div className="bg-base-200 py-4 flex gap-2 px-4 lg:px-40"> */}
          <FilterBox />
        {/* </div> */}
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
