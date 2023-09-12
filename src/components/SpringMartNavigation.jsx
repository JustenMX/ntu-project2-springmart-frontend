import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function SpringMartNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="border-b relative">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <Link to="/springmart">
            <span
              className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <img
                src={logo}
                alt="logo"
                className="h-auto w-12 sm:w-auto max-w-full sm:h-24"
              />
              Spring Mart
            </span>
          </Link>
          {/* nav start */}
          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            <Link to="/springmart">
              <h1 className="text-lg font-semibold text-indigo-500">Home</h1>
            </Link>

            <div className="relative group">
              <Link to="/springmart/category">
                <span className="text-lg font-semibold text-gray-600 group-hover:text-indigo-500 group-hover:cursor-pointer">
                  Categories
                </span>
              </Link>
              <div className="absolute hidden bg-white border border-gray-200 py-2 z-20 group-hover:block">
                <Link
                  to="/springmart/category/beverages"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Beverages
                </Link>
                <Link
                  to="/springmart/category/frozen"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Frozen
                </Link>
                <Link
                  to="/springmart/category/snacks"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Snacks
                </Link>
                <Link
                  to="/springmart/category/essentials"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Essentials
                </Link>
              </div>
            </div>

            <Link to="/springmart/products">
              <h1 className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                Products
              </h1>
            </Link>

            <Link to="/springmart/sales">
              <h1 className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                Sale
              </h1>
            </Link>

            <Link to="/springmart/about">
              <h1 className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                About
              </h1>
            </Link>
          </nav>
          {/* nav end */}

          {/* focus nav starts */}
          <div className="flex divide-x border-r sm:border-l relative z-10">
            <Link to="/springmart/wishlist">
              <div className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
                <FontAwesomeIcon icon={faHeart} size="lg" />

                <span className="hidden text-xs font-semibold text-gray-500 sm:block ">
                  Wishlist
                </span>
              </div>
            </Link>

            <div className="relative group">
              <Link to="/springmart/user">
                <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                  <FontAwesomeIcon icon={faUser} size="lg" />

                  <span className="hidden text-xs font-semibold text-gray-500 sm:block group-hover:text-indigo-500 group-hover:cursor-pointer">
                    Account
                  </span>
                </div>
              </Link>

              <div className="absolute hidden bg-white border border-gray-200 py-2 z-20 group-hover:block rounded-md">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Log Out
                </Link>
              </div>
            </div>

            <Link to="/springmart/cart">
              <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />

                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                  Cart
                </span>
              </div>
            </Link>

            <button
              type="button"
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Menu
              </span>
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white border border-gray-200 py-2 z-20">
                <Link
                  to="/springmart"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  to="/springmart/category"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Categories
                </Link>

                <Link
                  to="/springmart/products"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Products
                </Link>

                <Link
                  to="/springmart/sales"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sale
                </Link>
                <Link
                  to="/springmart/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About
                </Link>
              </div>
            )}
          </div>

          {/* focus nav end */}
        </div>
      </header>
    </>
  );
}

export default SpringMartNavigation;
