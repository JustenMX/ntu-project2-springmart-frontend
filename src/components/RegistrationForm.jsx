import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import bcrypt from "bcryptjs";
import openmapAPI from "../api/openmapAPI";
import springmartAPI from "../api/springmartAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegistrationForm() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  /**
   * ==============================================
   * Get Address From Postal Code
   * ==============================================
   */
  const getAddressFromPostalcode = async (event) => {
    event.preventDefault();
    const postalCode = formik.values.postalCode;
    try {
      const response = await openmapAPI.get(
        `/search?searchVal=${postalCode}&returnGeom=N&getAddrDetails=Y&pageNum=1`
      );
      console.log(response.data.results?.[0]);
      setAddress(response.data.results?.[0]);
      formik.setFieldValue("address", response.data.results?.[0]?.ADDRESS);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  /**
   * ==============================================
   * Formik with Yup validation
   * ==============================================
   */
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      unitNo: "",
      postalCode: "138664",
      optMarketing: false,
      joinDate: new Date().toISOString,
      isSubmitting: true,
      isValidating: true,
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed")
        .lowercase()
        .trim()
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed")
        .lowercase()
        .trim()
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one numeric digit")
        .required("Password is required"),
      passwordConfirmation: Yup.string()
        .label("confirm password")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      postalCode: Yup.string()
        .matches(/^[0-9]{6}$/, "Must be exactly 6 digits")
        .required("Required"),
      unitNo: Yup.string()
        .matches(
          /^([0-9]{1,2}|[0-9]{1,2}-[0-9]{1,2}(-[0-9]{1,2})?)$/,
          "Invalid unit number format"
        )
        .required("Required"),
    }),

    onSubmit: async (values) => {
      const currentDate = new Date().toISOString();
      values.joinDate = currentDate;

      try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(values.password, 10);
        values.password = hashedPassword;
        // Post Method
        const response = await springmartAPI.post("/user/register", values);
        console.log("API Response:", response.data);

        if (response.status === 200) {
          console.log("User registered successfully");
          toast.success("Registered successfully");
          setTimeout(() => {
            navigate("/authenticate");
          }, 2000);
        } else {
          throw new Error("Network Error");
        }
      } catch (error) {
        toast.error(error.message);
      }
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 grid grid-cols-6 gap-6"
      >
        {/* First Name */}
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-sm font-semibold text-red-600">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        {/* Last Name */}

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-sm font-semibold text-red-600">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>

        {/* Email */}

        <div className="col-span-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="text-sm font-semibold text-red-600">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        {/* Password */}

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            type="password"
            id="Password"
            name="password"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="text-sm font-semibold text-red-600">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        {/* Password Confirmation */}
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="passwordConfirmation"
            className="block text-sm font-medium text-gray-700"
          >
            Password Confirmation
          </label>

          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
          />

          {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation ? (
            <div className="text-sm font-semibold text-red-600">
              {formik.errors.passwordConfirmation}
            </div>
          ) : null}
        </div>

        {/* Postal Code */}
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-gray-700"
          >
            Postal Code
          </label>
          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postalCode}
              />

              {!formik.errors.postalCode ? (
                <button
                  className="inline-block ml-2 px-4 py-2 rounded-md border border-blue-600 bg-blue-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  onClick={getAddressFromPostalcode}
                >
                  <FontAwesomeIcon icon={faSearchLocation} />
                </button>
              ) : (
                <button
                  className="inline-block ml-2 px-4 py-2 rounded-md border border-red-600 bg-red-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-blue-500"
                  onClick={getAddressFromPostalcode}
                >
                  <FontAwesomeIcon icon={faCancel} />
                </button>
              )}
            </div>
            {formik.touched.postalCode && formik.errors.postalCode ? (
              <div className="text-sm font-semibold text-red-600">
                {formik.errors.postalCode}
              </div>
            ) : null}
          </div>
        </div>

        {/* Unit No */}
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="unitNo"
            className="block text-sm font-medium text-gray-700"
          >
            Unit No
          </label>

          <input
            type="text"
            id="unitNo"
            name="unitNo"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.unitNo}
          />
          {formik.touched.unitNo && formik.errors.unitNo ? (
            <div className="text-sm font-semibold text-red-600">
              {formik.errors.unitNo}
            </div>
          ) : null}
        </div>

        {/* Address */}

        <div className="col-span-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>

          {address ? (
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={formik.values.address}
              readOnly
            />
          ) : (
            <div>
              <img src="src/assets/loading.gif" alt="loading" />
            </div>
          )}
        </div>

        <div className="col-span-6">
          <label htmlFor="optMarketing" className="flex gap-4">
            <input
              type="checkbox"
              id="optMarketing"
              name="optMarketing"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.optMarketing}
            />

            <span className="text-sm text-gray-700">
              I want to receive emails about events, product updates and company
              announcements.
            </span>
          </label>
        </div>

        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our
            <span className="mx-1 underline text-blue-600">
              <Link to="/terms">terms and conditions</Link>
            </span>
            and
            <span className="mx-1 underline text-blue-600">
              <Link to="/privacy">privacy policy</Link>
            </span>
            .
          </p>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            type="submit"
          >
            Create an account
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <span className="mx-1 underline text-blue-600">
              <Link to={"/authenticate"}>Sign in</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
