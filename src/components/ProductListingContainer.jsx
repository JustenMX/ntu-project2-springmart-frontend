/* eslint-disable react/prop-types */
import ProductListingCard from "./ProductListingCard";

function ProductListingContainer(props) {
  const { productList } = props;

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Products
          </h2>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* Products listed here */}

          {productList.map((product) => (
            <div key={product.id}>
              <ProductListingCard
                productListingImgSrc={product.imgUrl}
                productListingImgAlt="springmart product"
                productListingPromotionLabel={product.saleItem}
                productListingProductName={product.label}
                productListingProductBrand={product.brand}
                productListingCurrentPrice={product.currentPrice}
                productListingOriginalPrice={product.originalPrice}
                params={product.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListingContainer;
