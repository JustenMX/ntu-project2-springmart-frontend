/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProductCTACard(props) {
  const {
    productImgSrc,
    productImgAlt,
    productDiscount,
    productDiscountLabel,
    productName,
    productBrand,
    productCurrentPrice,
    productOriginalPrice,
  } = props;
  return (
    <div>
      <div
        className="group relative mb-2 block h-96 overflow-hidden rounded-lg
        bg-gray-100 shadow-lg lg:mb-3"
      >
        <Link to="/springmart/category">
          <img
            src={productImgSrc}
            loading="lazy"
            alt={productImgAlt}
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </Link>
        <div className="absolute bottom-2 left-0 flex gap-2">
          <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
            {productDiscount}
          </span>
          <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
            {productDiscountLabel}
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2 px-2">
        <div className="flex flex-col text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
          <Link to="/springmart/category">{productName}</Link>
          <span className="text-gray-500 text-sm font-light">
            by {productBrand}
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-600 lg:text-lg">
            {productCurrentPrice}
          </span>
          <span className="text-sm text-red-500 line-through">
            {productOriginalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCTACard;
