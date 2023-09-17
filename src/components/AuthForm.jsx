import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import bcrypt from "bcryptjs";
import springmartAPI from "../api/springmartAPI";
function AuthForm() {
  /**
   * ==============================================
   * Formik with Yup validation
   * ==============================================
   */

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(values.password, 10);
        values.password = hashedPassword;
        // Post Method
        const response = await springmartAPI.post("/user/authenticate", values);
        console.log("API Response:", response.data);

        if (response.data.success) {
          alert("Login successful! - Welcome to Spring Mart");
          history.push("/springmart");
        } else {
          alert("Invalid email or password. Please try again.");
        }
      } catch (error) {
        console.error("Error", error);
      }
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white bg-opacity-90 backdrop-blur-md"
      >
        <p className="text-lg font-medium text-gray-900">
          Sign in to your account
        </p>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
          {formik.touched.email && formik.errors.email ? (
            <div className="flex flex-row m-2 text-sm font-semibold text-red-600">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            type="password"
            id="Password"
            name="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            placeholder="Enter password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
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
          {formik.touched.password && formik.errors.password ? (
            <div className="flex flex-row m-2 text-sm font-semibold text-red-600">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white my-5"
        >
          Sign in
        </button>

        <p className="text-sm text-gray-500">
          No account?
          <span className="mx-1 underline text-blue-600">
            <Link to={"/register"}>Register now</Link>
          </span>
        </p>
        <div className="text-blue-600 underline text-sm">
          <Link to="/">Home</Link>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
