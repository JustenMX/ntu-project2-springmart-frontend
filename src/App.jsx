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
        <Route path="/springmart/sales" element={<SalesPage />} />
        <Route path="/springmart/about" element={<AboutPage />} />
        <Route path="/springmart/wishlist" element={<WishListPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
