/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProductListingCard(props) {
  const {
    productListingImgSrc,
    productListingImgAlt,
    productListingPromotionLabel,
    productListingProductName,
    productListingProductBrand,
    productListingCurrentPrice,
    productListingOriginalPrice,
  } = props;
  return (
    <div>
      <div className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
        <Link to="/springmart/products">
          <img
            src={`${productListingImgSrc}?auto=format&q=75&fit=crop&w=600`}
            loading="lazy"
            alt={productListingImgAlt}
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </Link>

        {productListingPromotionLabel && (
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            {productListingPromotionLabel}
          </span>
        )}

        <button className="absolute bottom-2 right-2 bg-emerald-600 text-white py-2 px-4 rounded-full shadow-sm hover:bg-emerald-700 focus:ring-emerald-600">
          Add to Cart
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-1 text-gray-500 lg:text-lg">
        <Link to="/springmart/products">
          <div className="hover:gray-800 lg:mb-0.5 lg:mr-2">
            {productListingProductName}
          </div>
        </Link>
        <div className="hover:gray-800 lg:mb-0.5 text-sm">
          by {productListingProductBrand}
        </div>
      </div>

      <div className="flex items-end gap-2">
        <span className="font-bold text-gray-800 lg:text-lg">
          ${productListingCurrentPrice}
        </span>

        {productListingOriginalPrice && (
          <span className="mb-0.5 text-red-500 line-through text-sm">
            ${productListingOriginalPrice}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductListingCard;
