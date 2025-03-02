import Container from "@/src/components/Container";

import CartItemsList from "@/src/app/cart/CartItemsList";
import OrderBox from "@/src/app/cart/OrderBox";

const CartPage = () => {
  return (
    <main className="min-h-screen bg-base-200">
      <Container>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <CartItemsList />
            <OrderBox />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CartPage;
