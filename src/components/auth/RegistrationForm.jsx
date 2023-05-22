import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import toast from "../../helpers/toast";
import { register } from "../../services/ApiService";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginState } from "../../store/authSlice";
import { setLoading } from "../../store/loadingSlice";

function RegistrationForm() {
  const navigate = useNavigate(); // Get navigate from react router
  const dispatch = useDispatch();

  // Form validation with yup
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Minimum 3 symbols required.")
      .max(20, "Maximum 20 symbols allowed.")
      .required("Username is required."),
    email: Yup.string().email("Invalid email.").required("Email is required."),
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
      const registerRes = await register(credentials); // Register user
      dispatch(
        loginState({
          access: registerRes.data.access_data.access,
          refresh: registerRes.data.access_data.refresh,
          user: {
            id: registerRes.data.user.id,
            user: registerRes.data.user.username,
            email: registerRes.data.user.email,
          },
          time: true,
        })
      ); // Dispatch auth event
      dispatch(setLoading(false)); // Hide spinner
      toast("success", "Successfully registered."); // Show success message
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
                  <label htmlFor="email" className="form-label">
                    Email
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
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <Link to="/login" className="btn btn-link">
                  Already registered?
                </Link>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
