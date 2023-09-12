import BannerCTA from "./BannerCTA";
import Footer from "./Footer";
import Navigation from "./Navigation";
import NewsLetterCTA from "./NewsLetterCTA";
import SpringMartHero from "./SpringMartHero";
import ProductCTAContainer from "./ProductCTAContainer";
import CategoryCTAContainer from "./CategoryCTAContainer";

function SpringMartContainer() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Navigation />
        <SpringMartHero />
      </div>
      <ProductCTAContainer />

      <BannerCTA />

      <CategoryCTAContainer />

      <NewsLetterCTA />

      <Footer />
    </>
  );
}

export default SpringMartContainer;
