/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ProductListingCard from "./ProductListingCard";
import springmartAPI from "../api/springmartAPI";
function WishListContainer() {
  const [wishList, setWishList] = useState();
  const userId = localStorage.getItem("userId");

  /**
   * ==============================================
   * FETCH WISHLIST
   * ==============================================
   */
  const getWishList = async () => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
      const response = await springmartAPI.get(`wishlist/${userId}`, {
        headers,
      });
      console.log(response.data);
      setWishList(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getWishList();
  }, [userId]);

  console.log(wishList);

  /**
   * ==============================================
   * DELETE WISHLIST ITEM
   * ==============================================
   */

  const deleteWishListItem = async (productId) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
      const response = await springmartAPI.delete(`wishlistitem/${productId}`, {
        headers,
      });
      console.log(response.data);
      getWishList();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            WishList
          </h2>

          <button className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
            Show more
          </button>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* Products listed here */}

          {wishList?.wishListItem.map((item) => (
            <div key={item.id}>
              <ProductListingCard
                productListingImgSrc={item.imgUrl}
                productListingImgAlt={item.label}
                productListingPromotionLabel={item.saleItem}
                productListingProductName={item.label}
                productListingProductBrand={item.brand}
                productListingCurrentPrice={item.currentPrice}
                productListingOriginalPrice={item.originalPrice}
                productDeleteAllowed="true"
                handleDelete={() => deleteWishListItem(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishListContainer;
