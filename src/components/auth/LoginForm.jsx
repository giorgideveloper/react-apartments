import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "../../helpers/toast";
import { login } from "../../services/ApiService";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginState } from "../../store/authSlice";
import { setLoading } from "../../store/loadingSlice";

function LoginForm() {
  const navigate = useNavigate(); // Get navigate from react router
  const dispatch = useDispatch();

  // Form validation with yup
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Minimum 3 symbols required.")
      .max(20, "Maximum 20 symbols allowed.")
      .required("Username is required."),
    password: Yup.string()
      .min(3, "Minimum 3 symbols required.")
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
      dispatch(setLoading(true)); // Show spinner
      const loginRes = await login(credentials); // Login user
      dispatch(
        loginState({
          access: loginRes.data.data.access,
          refresh: loginRes.data.data.refresh,
          user: loginRes.data.user_info,
          time: true,
        })
      ); // Dispatch auth event
      dispatch(setLoading(false)); // Hide spinner
      toast("success", "Successfully logged in."); // Show success message
      navigate("/"); // Redirect to home page
    } catch (error) {
      dispatch(setLoading(false)); // Hide spinner
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
                <button type="submit" className="btn btn-primary">
                  Login
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
                      values.username = "admin";
                      values.password = "123";
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
