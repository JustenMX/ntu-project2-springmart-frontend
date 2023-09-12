import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import logo from "../assets/logo.svg";
function RegistrationContainer() {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="groceries"
              src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?&auto=format&fit=crop&w=3870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="hidden lg:relative lg:block lg:p-12">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="h-auto w-12 sm:w-auto max-w-full sm:h-24"
                />
              </Link>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Spring Mart
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Explore a curated selection of products where technology meets
                style. At Spring Mart, we&apos;re passionate about delivering
                cutting-edge innovations for your everyday needs.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-auto w-12 sm:w-auto max-w-full sm:h-24"
                  />
                </Link>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Spring Mart
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Explore a curated selection of products where technology meets
                  style. At Spring Mart, we&apos;re passionate about delivering
                  cutting-edge innovations for your everyday needs.
                </p>
              </div>
              <RegistrationForm />
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default RegistrationContainer;
