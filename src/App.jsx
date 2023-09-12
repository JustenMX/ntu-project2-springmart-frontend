import "./index.css";
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
import CartPage from "./pages/CartPage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Spring Mart Routes */}
        <Route path="/springmart" element={<SpringMartPage />} />
        <Route path="/springmart/category" element={<CategoryPage />} />
        <Route path="/springmart/products" element={<ProductListingPage />} />
        {/* to add a route here when products filtered by category */}
        <Route
          path="/springmart/products/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/springmart/sales" element={<SalesPage />} />
        <Route path="/springmart/about" element={<AboutPage />} />
        <Route path="/springmart/wishlist" element={<WishListPage />} />
        <Route path="/springmart/user" element={<UserAccountPage />} />
        <Route path="/springmart/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
