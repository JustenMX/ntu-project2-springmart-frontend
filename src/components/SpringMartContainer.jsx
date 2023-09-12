import BannerCTA from "./BannerCTA";
import Footer from "./Footer";
import Navigation from "./Navigation";
import NewsLetterCTA from "./NewsLetterCTA";
import ProductCTA from "./ProductCTA";
import SpringMartHero from "./SpringMartHero";
import CollectionCTA from "./CollectionCTA";

function SpringMartContainer() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Navigation />
        <SpringMartHero />
      </div>
      <ProductCTA />

      <BannerCTA />

      <CollectionCTA />

      <NewsLetterCTA />

      <Footer />
    </>
  );
}

export default SpringMartContainer;
