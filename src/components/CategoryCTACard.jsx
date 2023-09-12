/* eslint-disable react/prop-types */
//

function CategoryCTACard(props) {
  const { categoryImgSrc, categoryImgAlt, categoryName } = props;
  return (
    <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
      <img
        src={categoryImgSrc}
        loading="lazy"
        alt={categoryImgAlt}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />

      <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
        <span className="text-gray-500">Spring Mart</span>
        <span className="text-lg font-bold text-gray-800 lg:text-xl">
          {categoryName}
        </span>
      </div>
    </div>
  );
}

export default CategoryCTACard;
