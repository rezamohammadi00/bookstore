import Container from "@/src/components/Container";

import CartItemsList from "@/src/app/cart/CartItemsList";

const CartPage = () => {
  return (
    <main className="min-h-screen bg-base-200">
      <Container>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <CartItemsList />
            <div className="w-full md:w-1/3">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">مجموع قیمت شفارش‌ها</h2>
                  <div className="text-lg font-semibold mt-4">
                    <span>
                      <span className="border-b-2 border-primary font-bold ml-1">
                        {/* {totalPrice} */}
                      </span>
                      تومان
                    </span>
                  </div>
                  <button className="btn btn-primary mt-4 text-white">
                    ادامه خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CartPage;
