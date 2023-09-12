import ProductDetailCard from "./ProductDetailCard";

function ProductDetailContainer() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ProductDetailCard
            productImgSrcOne="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            productImgAltOne="pineapple"
            productPromotionLabel="sale"
            productImgSrcTwo="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            productImgAltTwo="pineapple"
            productImgSrcThree="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            productImgAltThree="pineapple"
            productDetailBrand="Under the Sea"
            productDetailName="Pineapple"
            productDetailCurrentPrice="$15.00"
            productDetailOrginalPrice="$30.00"
            productDetailDescription="This is a pineapple, from the land of pineapple and since this is an pineapple and I have to fill this space with a description of pineapple, id say that this pineapple is a friend of mine, but he doesnt live under the sea. bye"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
