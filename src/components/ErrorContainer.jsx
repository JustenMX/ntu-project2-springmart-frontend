import { Link } from "react-router-dom";

function ErrorContainer() {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-blend-multiply relative flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format"
        alt="Photo by @heydevn"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="bg-white p-8 shadow-lg rounded-lg text-center relative z-10">
        <img
          src="src/assets/logo.svg"
          alt="logo"
          className="h-auto max-w-full max-h-[4.5rem] sm:h-18 mx-auto mb-4"
        />

        <p className="mb-4 text-sm font-semibold uppercase md:text-base">
          Error 404
        </p>
        <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-center md:text-3xl">
          Page not found
        </h1>
        <p className="mb-8 text-gray-500 md:text-lg">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/">
          <button className="inline-block justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorContainer;
