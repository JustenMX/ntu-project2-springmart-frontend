import CartCheckoutFunnel from "./CartCheckoutFunnel";
import CartCheckoutCard from "./CartCheckoutProduct";

function CartCheckoutContainer() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Cart
            </h2>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
            <CartCheckoutCard />

            <CartCheckoutFunnel />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCheckoutContainer;
