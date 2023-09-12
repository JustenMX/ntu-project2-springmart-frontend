import ProductCTACard from "./ProductCTACard";

function ProductCTAContainer() {
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
          <ProductCTACard
            productImgSrc="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            productImgAlt="Pineapple"
            productDiscount="-50%"
            productDiscountLabel="New"
            productName="Pineapple"
            productBrand="Cool Brand"
            productCurrentPrice="$19.99"
            productOriginalPrice="$39.99"
          />

          <ProductCTACard
            productImgSrc="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            productImgAlt="Strawberry"
            productName="Strawberry"
            productBrand="Cool Brand"
            productCurrentPrice="$29.99"
          />

          <ProductCTACard
            productImgSrc="https://images.unsplash.com/photo-1616606103915-dea7be788566?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            productImgAlt="chips"
            productName="Love Corn Chips"
            productBrand="Cool Brand"
            productCurrentPrice="$9.99"
          />

          <ProductCTACard
            productImgSrc="https://images.unsplash.com/photo-1580314552228-5a7ce023fc9e?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            productImgAlt="pulsitos"
            productDiscount="-20%"
            productDiscountLabel="New"
            productName="Pulsitos"
            productBrand="Cool Brand"
            productCurrentPrice="$29.99"
            productOriginalPrice="$49.99"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCTAContainer;
