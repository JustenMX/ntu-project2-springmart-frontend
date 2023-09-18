/* eslint-disable react/prop-types */
import ProductListingContainer from "../components/ProductListingContainer";
import SpringMartNavigation from "../components/SpringMartNavigation";

function ProductListingPage(props) {
  const { productList } = props;

  return (
    <div>
      <SpringMartNavigation />
      <ProductListingContainer productList={productList} />
    </div>
  );
}

export default ProductListingPage;
