import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { StarIcon } from "@heroicons/react/24/outline";
import type { CardProps } from "@/src/components/Card";
import Container from "@/src/components/Container";
import AddToCart from "@/src/components/AddToCart";

type Props = {
  params: Promise<{ productId: string }>;
};

const getProduct = async (productId: string) => {
  const res = await fetch("http://localhost:3000/api/products/" + productId);
  if (!res.ok) notFound(); // it is commonly used(notFound())in detail pages(if you not use generateStaticParams).
  return res.json();
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = (await params).productId;
  const product: CardProps = await getProduct(productId);

  return {
    title: product.name,
  };
}

const ProductPage = async ({ params }: Props) => {
  const productId = (await params).productId;
  const product: CardProps = await getProduct(productId);

  return (
    <main className="md:min-h-[85vh] min-h-[86vh] bg-base-200">
      <Container>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="md:flex md:space-x-8 md:gap-10">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <Image
                  src={"/images/fake.jpg"}
                  alt={product.name}
                  width={300}
                  height={450}
                  className="w-full h-72 md:h-full rounded-lg shadow-md object-contain bg-white"
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <h2 className="text-xl text-gray-600 mb-4">
                  نویسنده: {product.name}
                </h2>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(5.5)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {/* {book.rating}/5 */}
                  </span>
                </div>
                <span className="text-gray-700 mb-6">
                  {product.description}
                </span>
                <div className="flex items-center justify-between mb-6 pt-3">
                  <span className="text-2xl font-bold text-primary ">
                    {product.price} تومان
                  </span>
                  <AddToCart {...product} />
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-sm text-gray-600">
                        تعداد صحفات
                      </h3>
                      <p>{100} صفحه</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-600">
                        زمان انتشار
                      </h3>
                      <p>{"1400/12/2"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProductPage;
