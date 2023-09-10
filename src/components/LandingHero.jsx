import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LandingHero() {
  return (
    <div>
      <section className="h-screen bg-cover bg-no-repeat bg-blend-multiply relative flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="src/assets/panarello.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative px-4 mx-auto max-w-screen-xl text-center z-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl">
            Elevate Your Shopping Experience with Spring Mart
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Explore a curated selection of products where technology meets
            style. At Spring Mart, we&apos;re passionate about delivering
            cutting-edge innovations for your everyday needs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <div className="mx-1">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff" }}
                />
              </div>
            </button>
            <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Register now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingHero;
