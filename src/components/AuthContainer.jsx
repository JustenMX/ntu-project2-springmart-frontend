import { Link } from "react-router-dom";

function AuthContainer() {
  return (
    <section className="h-screen bg-cover bg-no-repeat bg-blend-multiply relative flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="src/assets/panarello.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative z-20 text-white text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Elevate Your Shopping Experience with Spring Mart
          </h1>

          <form
            action=""
            className="mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white bg-opacity-90 backdrop-blur-md"
          >
            <p className="text-lg font-medium text-gray-900">
              Sign in to your account
            </p>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter password"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>

            <p className="text-sm text-gray-500">
              No account?
              <Link to={"/register"}>Register now</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AuthContainer;
