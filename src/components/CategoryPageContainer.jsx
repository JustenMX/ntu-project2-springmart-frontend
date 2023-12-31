import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryPageCard from "./CategoryPageCard";

function CategoryPageContainer() {
  const [showMoreFlag, setShowMoreFlag] = useState(false);

  const handleShowMore = () => {
    setShowMoreFlag((prevFlag) => !prevFlag);

    console.log(showMoreFlag);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Category
          </h2>

          <button
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            onClick={() => handleShowMore()}
          >
            Show more
          </button>
        </div>

        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          <Link to="/springmart/product?category=beverage">
            <CategoryPageCard
              categoryImgSrc="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
              categoryName="Beverage"
            />
          </Link>

          <CategoryPageCard
            categoryImgSrc="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
            categoryName="Frozen"
          />

          <CategoryPageCard
            categoryImgSrc="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
            categoryName="Snacks"
          />

          <CategoryPageCard
            categoryImgSrc="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
            categoryName="Essentials"
          />

          {showMoreFlag && (
            <>
              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />

              <CategoryPageCard
                categoryImgSrc="https://images.unsplash.com/photo-1530543787849-128d94430c6b"
                categoryName="COMING SOON"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPageContainer;
