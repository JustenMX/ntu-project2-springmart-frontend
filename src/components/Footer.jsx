import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2">
              <span
                className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                aria-label="logo"
              >
                <img
                  src="src/assets/logo.svg"
                  alt="logo"
                  className="h-auto max-w-full sm:h-10"
                />
                Spring Mart
              </span>
            </div>

            <p className="mb-6 text-gray-500 sm:pr-8">
              Elevate Your Shopping Experience with Spring Mart
            </p>

            {/* LinkedIn */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 hover:opacity-100"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  style={{ color: "#aaaaaa" }}
                  className="hover:opacity-100"
                />
              </a>

              {/* Github */}

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  style={{ color: "#aaaaaa" }}
                />
              </a>

              {/* Instagram */}

              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  style={{ color: "#aaaaaa" }}
                />
              </a>
            </div>
            {/* <!-- social - end --> */}
          </div>

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Products
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Overview
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Solutions
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Pricing
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Customers
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  About
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Investor Relations
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Jobs
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Press
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Support
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Contact
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Documentation
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Chat
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Terms of Service
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Privacy Policy
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Cookie settings
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
        </div>

        <div className="border-t py-8 text-center text-sm text-gray-400">
          © 2023 - Present Spring Mart. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
