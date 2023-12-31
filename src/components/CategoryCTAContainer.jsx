import CategoryCTACard from "./CategoryCTACard";

function CategoryCTAContainer() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          Best Selling Categories
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <CategoryCTACard
            categoryImgSrc="https://images.unsplash.com/photo-1651950522672-42fed61a5bca?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            categoryImgAlt="Photo by Tyler Nix"
            categoryName="Beverage"
          />

          <CategoryCTACard
            categoryImgSrc="https://images.unsplash.com/photo-1601599967100-f16100982063?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            categoryImgAlt="Photo by Eduardo Soares"
            categoryName="Frozen"
          />

          <CategoryCTACard
            categoryImgSrc="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            categoryImgAlt="Photo by Jeff Siepman"
            categoryName="Snacks"
          />

          <CategoryCTACard
            categoryImgSrc="https://images.unsplash.com/photo-1631524254770-03abe3f42a0d?auto=format&q=75&fit=crop&w=600&h=700"
            categoryImgAlt="Photo by Colourblind Kevin"
            categoryName="Essentials"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryCTAContainer;
