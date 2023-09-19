/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTruckFast } from "@fortawesome/free-solid-svg-icons";

function ProductDetailCard(props) {
  const {
    productImgSrcOne,
    productImgAltOne,
    productPromotionLabel,
    // productImgSrcTwo,
    // productImgAltTwo,
    // productImgSrcThree,
    // productImgAltThree,
    productDetailBrand,
    productDetailName,
    productDetailCurrentPrice,
    productDetailOrginalPrice,
    productDetailDescription,
  } = props;

  return (
    <>
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg bg-transparent">
          <img
            src={productImgSrcOne}
            loading="lazy"
            alt={productImgAltOne}
            className="h-full w-full object-cover object-center"
          />

          {productPromotionLabel && (
            <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
              Sale
            </span>
          )}
        </div>

        {/* START - FOR FUTURE DEVELOPMENT - TO ADD 2 MORE IMAGES */}
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={`${productImgSrcTwo}?auto=format`}
              loading="lazy"
              alt={productImgAltTwo}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={`${productImgSrcThree}?auto=format`}
              loading="lazy"
              alt={productImgAltThree}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div> */}
        {/* END - FOR FUTURE DEVELOPMENT - TO ADD 2 MORE IMAGES */}
      </div>

      <div className="md:py-8">
        <div className="mb-2 md:mb-3">
          <span className="mb-0.5 inline-block text-gray-500">
            {productDetailBrand}
          </span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            {productDetailName}
          </h2>
        </div>

        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">
              ${productDetailCurrentPrice}
            </span>

            {productPromotionLabel && (
              <span className="mb-0.5 text-red-500 line-through">
                ${productDetailOrginalPrice}
              </span>
            )}
          </div>

          <span className="text-sm text-gray-500">incl. GST plus shipping</span>
        </div>

        <div className="mb-6 flex items-center gap-2 text-gray-500">
          <FontAwesomeIcon icon={faTruckFast} />

          <span className="text-sm">2-4 day shipping</span>
        </div>

        <div className="flex gap-2.5">
          <button className="inline-block flex-1 rounded-lg bg-amber-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-amber-600 focus-visible:ring active:bg-amber-700 sm:flex-none md:text-base">
            Add to cart
          </button>

          <button className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

        {/* Description */}
        <div className="mt-10 md:mt-16 lg:mt-20">
          <div className="mb-3 text-lg font-semibold text-gray-800">
            Description
          </div>

          <p className="text-gray-500">{productDetailDescription}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetailCard;
