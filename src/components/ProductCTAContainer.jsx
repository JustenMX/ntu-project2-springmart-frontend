/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductCTACard from "./ProductCTACard";

function ProductCTAContainer(props) {
  const { productList } = props;

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Convert the object to an array of values
    if (typeof productList === "object") {
      const productsArray = Object.values(productList);

      const shuffledDiscountedProducts = productsArray.sort(
        () => Math.random() - 0.5
      );
      console.log(shuffledDiscountedProducts);
      const randomDiscountedProducts = shuffledDiscountedProducts.slice(0, 4);
      setRandomProducts(randomDiscountedProducts);
    }
  }, [productList]);

  console.log(randomProducts);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Fast Moving Items
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            These products are in high demand and selling out quickly.
            Don&apos;t miss your chance to grab them before they&apos;re gone!
          </p>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {randomProducts.map((product) => (
            <div key={product.id}>
              <ProductCTACard
                productImgSrc={product.imgUrl}
                productImgAlt="springmart product"
                productDiscount="Buy Now"
                productDiscountLabel="New"
                productName={product.label}
                productBrand={product.brand}
                productCurrentPrice={product.currentPrice}
                // productOriginalPrice={product.originalPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCTAContainer;
