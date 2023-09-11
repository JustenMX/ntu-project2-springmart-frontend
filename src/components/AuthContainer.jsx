import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

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
          <AuthForm />
        </div>
      </div>
    </section>
  );
}

export default AuthContainer;
