import { useState } from "react";
import CartCheckoutFunnel from "./CartCheckoutFunnel";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CartCheckoutContainer() {
  const [count, setCount] = useState(1);

  // add product quantity
  const handleAddQty = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // minus product quantity
  const handleMinusQty = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  };

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
            {/* product starts here */}
            <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
              <div className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/doniqecd2/image/upload/v1694624325/SPRINGMART/BEVERAGE/ocjr7pswlaiko9mzjpug.jpg"
                    loading="lazy"
                    alt="bottle"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </Link>
              </div>

              <div className="flex flex-1 flex-col justify-between py-4">
                <div>
                  <Link to="/">
                    <div className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                      Holo Yup
                    </div>
                  </Link>

                  <span className="block text-gray-500">Cool Brand</span>
                </div>

                <div>
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                    {/* the static price of the product */}
                    $15.75
                  </span>

                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#c4bc00" }}
                    />
                    In stock
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 overflow-hidden rounded border">
                    <div className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring">
                      {count}
                    </div>

                    <div className="flex flex-col divide-y border-l">
                      <button
                        className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                        onClick={handleAddQty}
                      >
                        +
                      </button>
                      <button
                        className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                        onClick={handleMinusQty}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                    Delete
                  </button>
                </div>

                <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                  <span className="block font-bold text-gray-800 md:text-lg">
                    {/* the price that will be updated by the qty update */}$
                    {13 * count}
                  </span>
                </div>
              </div>
            </div>
            {/* product end */}

            <CartCheckoutFunnel />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCheckoutContainer;
