/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SpringMartContainer from "../components/SpringMartContainer";
import springmartAPI from "../api/springmartAPI";

function SpringMartPage() {
  const [productList, setProductList] = useState({});
  /**
   * ==============================================
   * FETCH PRODUCTS
   * ==============================================
   */
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const headers = {
          Authorization: `Bearer ${jwtToken}`,
        };
        const response = await springmartAPI.get("/product", { headers });
        console.log(response.data);
        setProductList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <SpringMartContainer productList={productList} />
    </>
  );
}

export default SpringMartPage;
