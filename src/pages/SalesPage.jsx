/* eslint-disable react/prop-types */
import SalesPageContainer from "../components/SalesPageContainer";
import SpringMartNavigation from "../components/SpringMartNavigation";

function SalesPage(props) {
  const { productList } = props;
  return (
    <div>
      <SpringMartNavigation />
      <SalesPageContainer productList={productList} />
    </div>
  );
}

export default SalesPage;
