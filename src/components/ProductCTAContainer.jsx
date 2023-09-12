function ProductCTAContainer() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Fast Moving Items
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            These products are in high demand and selling out quickly.
            Don&apos;t miss your chance to grab them before they&apos;re gone!
          </p>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Pineapple"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="absolute bottom-2 left-0 flex gap-2">
                <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                  -50%
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                  New
                </span>
              </div>
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Pineapple
                </a>
                <span className="text-gray-500">by Fancy Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $19.99
                </span>
                <span className="text-sm text-red-500 line-through">
                  $39.99
                </span>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Strawberry"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Strawberry
                </a>
                <span className="text-gray-500">by Cool Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $29.99
                </span>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1616606103915-dea7be788566?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="chips"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Love Corn Chips
                </a>
                <span className="text-gray-500">by Nice Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $35.00
                </span>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1580314552228-5a7ce023fc9e?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="pulsitos"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Pulsitos
                </a>
                <span className="text-gray-500">by Lavish Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $49.99
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCTAContainer;
