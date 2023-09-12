import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTruckFast } from "@fortawesome/free-solid-svg-icons";

function ProductDetailContainer() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* <!-- images - start --> */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Himanshu Dewangan"
                className="h-full w-full object-cover object-center"
              />

              <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                sale
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&q=75&fit=crop&w=250"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&q=75&fit=crop&w=250"
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* <!-- images - end --> */}

          {/* <!-- content - start --> */}
          <div className="md:py-8">
            {/* <!-- name - start --> */}
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                Fancy Brand
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                Pullover with pattern
              </h2>
            </div>
            {/* <!-- name - end --> */}

            {/* <!-- price - start --> */}
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  $15.00
                </span>
                <span className="mb-0.5 text-red-500 line-through">$30.00</span>
              </div>

              <span className="text-sm text-gray-500">
                incl. GST plus shipping
              </span>
            </div>
            {/* <!-- price - end --> */}

            {/* <!-- shipping notice - start --> */}
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <FontAwesomeIcon icon={faTruckFast} />

              <span className="text-sm">2-4 day shipping</span>
            </div>
            {/* <!-- shipping notice - end --> */}

            {/* <!-- buttons - start --> */}
            <div className="flex gap-2.5">
              <button className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                Add to cart
              </button>

              <button className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            {/* <!-- buttons - end --> */}

            {/* <!-- description - start --> */}
            <div className="mt-10 md:mt-16 lg:mt-20">
              <div className="mb-3 text-lg font-semibold text-gray-800">
                Description
              </div>

              <p className="text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p>
            </div>
            {/* <!-- description - end --> */}
          </div>
          {/* <!-- content - end --> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
