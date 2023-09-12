import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import AnimatedConfetti from "./AnimatedConfetti";

function SpringMartHero() {
  return (
    <div>
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
              Find your
              <br />
              groceries online
            </h1>

            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
              Explore a curated selection of products where technology meets
              style. At Spring Mart, we&apos;re passionate about delivering
              cutting-edge innovations for your everyday needs.
            </p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img
                src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
                loading="lazy"
                alt="Photo by Kaung Htet"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&q=75&fit=crop&w=550&h=550"
                loading="lazy"
                alt="Photo by Manny Moreno"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex h-12 w-48 divide-x overflow-hidden rounded-lg border">
            <AnimatedConfetti />
          </div>

          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
              Social
            </span>
            <span className="h-px w-12 bg-gray-200"></span>

            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  style={{ color: "#aaaaaa" }}
                  className="hover:opacity-100"
                />
              </a>

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
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpringMartHero;
