//

import ProductListingCard from "./ProductListingCard";

function ProductListingContainer() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Products
          </h2>

          <a
            href="#"
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Show more
          </a>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* Products listed here */}
          <ProductListingCard
            productListingImgSrc="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            productListingImgAlt="pineapple"
            productListingPromotionLabel="sale"
            productListingProductName="Pineapple"
            productListingProductBrand="Under the Sea"
            productListingCurrentPrice="15.00"
            productListingOriginalPrice="30.00"
          />

          <ProductListingCard
            productListingImgSrc="https://res.cloudinary.com/doniqecd2/image/upload/v1694603489/cld-sample-5.jpg"
            productListingImgAlt="pineapple"
            productListingProductName="Pineapple"
            productListingProductBrand="Under the Sea"
            productListingCurrentPrice="15.00"
          />

          <ProductListingCard
            productListingImgSrc="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            productListingImgAlt="pineapple"
            productListingProductName="Pineapple"
            productListingProductBrand="Under the Sea"
            productListingCurrentPrice="15.00"
          />

          <ProductListingCard
            productListingImgSrc="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            productListingImgAlt="pineapple"
            productListingProductName="Pineapple"
            productListingProductBrand="Under the Sea"
            productListingCurrentPrice="15.00"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductListingContainer;
