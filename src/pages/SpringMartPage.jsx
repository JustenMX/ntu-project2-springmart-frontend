/* eslint-disable react/prop-types */
import SpringMartContainer from "../components/SpringMartContainer";

function SpringMartPage(props) {
  const { productList } = props;
  return (
    <>
      <SpringMartContainer productList={productList} />
    </>
  );
}

export default SpringMartPage;
