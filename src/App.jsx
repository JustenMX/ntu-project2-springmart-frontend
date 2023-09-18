import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivacyPage from "./pages/PrivacyPage";
import ErrorPage from "./pages/ErrorPage";
import SpringMartPage from "./pages/SpringMartPage";
import TermsPage from "./pages/TermsPage";
import CategoryPage from "./pages/CategoryPage";
import SalesPage from "./pages/SalesPage";
import AboutPage from "./pages/AboutPage";
import WishListPage from "./pages/WishListPage";
import UserAccountPage from "./pages/UserAccountPage";
import CartCheckoutPage from "./pages/CartCheckoutPage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartCheckoutSuccess from "./pages/CartCheckoutSuccess";
import CartCheckoutFail from "./pages/CartCheckoutFail";
import springmartAPI from "./api/springmartAPI";

function App() {
  const [productList, setProductList] = useState({});

  /**
   * ==============================================
   * FETCH PRODUCTS
   * ==============================================
   */
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await springmartAPI.get("/product");
        console.log(response.data);
        setProductList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/authenticate" element={<AuthPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Spring Mart Routes */}
        <Route path="/springmart" element={<SpringMartPage />} />
        <Route path="/springmart/category" element={<CategoryPage />} />
        <Route
          path="/springmart/products"
          element={<ProductListingPage productList={productList} />}
        />
        {/* to add a route here when products filtered by category */}
        <Route
          path="/springmart/products/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/springmart/sales" element={<SalesPage />} />
        <Route path="/springmart/about" element={<AboutPage />} />
        <Route path="/springmart/wishlist" element={<WishListPage />} />
        <Route path="/springmart/user" element={<UserAccountPage />} />
        <Route path="/springmart/checkout" element={<CartCheckoutPage />} />
        <Route
          path="/springmart/checkout/success"
          element={<CartCheckoutSuccess />}
        />
        <Route
          path="/springmart/checkout/fail"
          element={<CartCheckoutFail />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
