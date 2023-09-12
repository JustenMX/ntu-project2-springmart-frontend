function CategoryCTA() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          Collections
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1651950522672-42fed61a5bca?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Tyler Nix"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Spring Mart</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Beverage
                </span>
              </div>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1601599967100-f16100982063?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Eduardo Soares"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Spring Mart</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Frozen
                </span>
              </div>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Jeff Siepman"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Spring Mart</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Snacks
                </span>
              </div>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1631524254770-03abe3f42a0d?auto=format&q=75&fit=crop&w=600&h=700"
                loading="lazy"
                alt="Photo by Colourblind Kevin"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Spring Mart</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Essentials
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCTA;
