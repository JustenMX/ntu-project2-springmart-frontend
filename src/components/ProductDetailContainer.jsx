/* eslint-disable react/prop-types */
import { useParams } from "react-router";
import ProductDetailCard from "./ProductDetailCard";

function ProductDetailContainer(props) {
  const { productList } = props;

  const { productId } = useParams();
  console.log(productId);

  const queryProduct = productList.filter((product) => product.id == productId);
  console.log("queryProduct:", queryProduct);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ProductDetailCard
            productImgSrcOne={queryProduct[0].imgUrl}
            productImgAltOne={queryProduct[0].imgAlt}
            productPromotionLabel={queryProduct[0].saleItem}
            // productImgSrcTwo="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            // productImgAltTwo="pineapple"
            // productImgSrcThree="https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
            // productImgAltThree="pineapple"
            productDetailBrand={queryProduct[0].brand}
            productDetailName={queryProduct[0].label}
            productDetailCurrentPrice={queryProduct[0].currentPrice}
            productDetailOrginalPrice={queryProduct[0].originalPrice}
            productDetailDescription={queryProduct[0].description}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
