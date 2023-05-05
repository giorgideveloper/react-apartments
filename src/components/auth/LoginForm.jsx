import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "../../helpers/toast";
import { login, setToken, user } from "../../services/ApiService";
import * as Yup from "yup";

function LoginForm() {
  const navigate = useNavigate(); // Get navigate from react router
  const [loading, setLoading] = useState(false); // Define loading

  // Form validation with yup
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Minimum 4 symbols required.")
      .max(20, "Maximum 20 symbols allowed.")
      .required("Username is required."),
    email: Yup.string()
      .email("Invalid email format.")
      .required("Email is required."),
    password: Yup.string()
      .min(8, "Minimum 8 symbols required.")
      .max(20, "Maximum 20 symbols allowed.")
      .required("Password is required."),
  });

  /**
   * Authenticate user and set token
   *
   * @param {*} credentials
   */
  const authenticate = async (credentials) => {
    try {
      setLoading(true); // Show spinner
      const loginRes = await login(credentials); // Login user
      // localStorage.setItem("token", loginRes.data.key); // TODO: Set token in storage
      setToken(loginRes.data.key); // Set token for axios instance
      const userRes = await user(); // Get user data
      console.log(userRes.data); // Log user data
      setLoading(false); // Hide spinner
      toast("success", "Successfully authenticated. Redirecting..."); // Show success message
      setTimeout(() => navigate("/"), 2000); // Redirect to home page after 2 seconds
    } catch (error) {
      setLoading(false); // Hide spinner
      toast("error", "Oops, something went wrong!"); // Show error message
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center g-3">
        <div className="col-12 col-md-4 col-lg-3">
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              authenticate(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username ? (
                    <div className="text-danger">
                      <small>{errors.username}</small>
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-danger">
                      <small>{errors.email}</small>
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <div className="text-danger">
                      <small>{errors.password}</small>
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary ${loading ? "disabled" : ""}`}
                >
                  Login
                  {loading ? (
                    <div
                      className="spinner-border spinner-border-sm text-light ms-2"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    ""
                  )}
                </button>
                <a href="#!" className="btn btn-link disabled">
                  Register
                </a>
                <div className="mt-2">
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none px-0"
                    onClick={(e) => {
                      e.preventDefault();
                      values.username = "user";
                      values.email = "mail@mail.ru";
                      values.password = "Paroli12345";
                      handleSubmit();
                    }}
                  >
                    Login with demo user
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
