/* eslint-disable react/prop-types */
import SpringMartFooter from "../components/SpringMartFooter";
import ProductDetailContainer from "../components/ProductDetailContainer";
import SpringMartNavigation from "../components/SpringMartNavigation";

function ProductDetailPage(props) {
  const { productList } = props;
  return (
    <div>
      <SpringMartNavigation />
      <ProductDetailContainer productList={productList} />
      <SpringMartFooter />
    </div>
  );
}

export default ProductDetailPage;
