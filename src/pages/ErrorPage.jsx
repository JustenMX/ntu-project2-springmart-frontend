import CallToActionButton from "../components/CallToActionButton";
import ErrorSVG from "../components/ErrorSVG";

function ErrorPage() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Uh-oh!
        </h1>
        <ErrorSVG />

        <p className="mt-4 text-gray-500 my-5">We can&apos;t find that page.</p>

        <CallToActionButton
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900 mt-5"
          buttonLabel="Go Back"
          path="/"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
