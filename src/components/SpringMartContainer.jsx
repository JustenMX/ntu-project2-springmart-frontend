/* eslint-disable react/prop-types */
import BannerCTA from "./BannerCTA";
import SpringMartFooter from "../components/SpringMartFooter";
import NewsLetterCTA from "./NewsLetterCTA";
import SpringMartHero from "./SpringMartHero";
import ProductCTAContainer from "./ProductCTAContainer";
import CategoryCTAContainer from "./CategoryCTAContainer";
import SpringMartNavigation from "./SpringMartNavigation";

function SpringMartContainer(props) {
  const { productList } = props;

  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mb-8">
          <SpringMartNavigation />
        </div>
        <SpringMartHero />
      </div>
      <ProductCTAContainer productList={productList} />

      <BannerCTA />

      <CategoryCTAContainer />

      <NewsLetterCTA />

      <SpringMartFooter />
    </>
  );
}

export default SpringMartContainer;
