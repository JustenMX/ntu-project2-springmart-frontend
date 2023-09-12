import BannerCTA from "./BannerCTA";
import Footer from "./Footer";
import Navigation from "./Navigation";
import NewsLetterCTA from "./NewsLetterCTA";
import SpringMartHero from "./SpringMartHero";
import CategoryCTA from "./CategoryCTA";
import ProductCTAContainer from "./ProductCTAContainer";

function SpringMartContainer() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Navigation />
        <SpringMartHero />
      </div>
      <ProductCTAContainer />

      <BannerCTA />

      <CategoryCTA />

      <NewsLetterCTA />

      <Footer />
    </>
  );
}

export default SpringMartContainer;
