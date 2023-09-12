import BannerCTA from "./BannerCTA";
import SpringMartFooter from "../components/SpringMartFooter";
import NewsLetterCTA from "./NewsLetterCTA";
import SpringMartHero from "./SpringMartHero";
import ProductCTAContainer from "./ProductCTAContainer";
import CategoryCTAContainer from "./CategoryCTAContainer";
import SpringMartNavigation from "./SpringMartNavigation";

function SpringMartContainer() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mb-8">
          <SpringMartNavigation />
        </div>
        <SpringMartHero />
      </div>
      <ProductCTAContainer />

      <BannerCTA />

      <CategoryCTAContainer />

      <NewsLetterCTA />

      <SpringMartFooter />
    </>
  );
}

export default SpringMartContainer;
