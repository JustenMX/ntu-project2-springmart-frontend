/* eslint-disable react/prop-types */

function CategoryPageCard(props) {
  const { categoryImgSrc, categoryName } = props;

  return (
    <div>
      <div className="relative w-auto h-32 mb-2 bg-gray-100 shadow-lg lg:mb-3">
        <div className="block w-full h-full overflow-hidden rounded-lg">
          <img
            src={`${categoryImgSrc}?auto=format&q=75&fit=crop&crop=top&w=600&h=700`}
            loading="lazy"
            alt="categorybg"
            className="h-full w-full object-cover object-center transition duration-200"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center">
          <button className="block text-lg font-bold transition duration-100 hover:text-gray-500">
            {categoryName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryPageCard;
