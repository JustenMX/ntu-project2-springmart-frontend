import BannerCTA from "./BannerCTA";
import Footer from "./Footer";
import Navigation from "./Navigation";
import NewsLetterCTA from "./NewsLetterCTA";
import ProductCTA from "./ProductCTA";
import SpringMartCollection from "./SpringMartCollection";
import SpringMartHero from "./SpringMartHero";

function SpringMartContainer() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Navigation />
        <SpringMartHero />
      </div>
      <ProductCTA />

      <BannerCTA />

      <SpringMartCollection />

      <NewsLetterCTA />

      <Footer />
    </>
  );
}

export default SpringMartContainer;
