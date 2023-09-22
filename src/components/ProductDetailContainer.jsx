/* eslint-disable react/prop-types */
import { useParams } from "react-router";
import ProductDetailCard from "./ProductDetailCard";
import springmartAPI from "../api/springmartAPI";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetailContainer(props) {
  const { productList } = props;
  const { productId } = useParams();

  const queryProduct = productList.filter((product) => product.id == productId);
  console.log("queryProduct:", queryProduct);

  const requestBody = queryProduct[0];
  console.log(requestBody);

  // Post to WishList
  const userId = localStorage.getItem("userId");
  console.log("UserID: " + userId);
  const addItemToWishList = async () => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
      //
      const response = await springmartAPI.post(
        `wishlist/${userId}/wishlistitem`,
        requestBody,
        { headers }
      );
      console.log("API Response:", response.data);
      if (response.status === 200) {
        console.log("Item added to wishlist");
        toast.success("Added to Wishlist succesfully");
      } else {
        throw new Error("Network Error");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
            addToWishList={addItemToWishList}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
