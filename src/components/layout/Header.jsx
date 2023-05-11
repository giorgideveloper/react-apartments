import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBuildingFillAdd, BsPower } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutState } from "../../store/authSlice";
import toast from "../../helpers/toast";

function Header() {
  const { pathname } = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutState());
    toast("success", "Logged out");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Apartments
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link
                    className={`btn btn-success ${
                      pathname === "/apartments/create" ? "btn-warning" : ""
                    }`}
                    to="apartments/create"
                  >
                    <BsBuildingFillAdd /> Add apartment
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    <BsPower /> Logout
                  </button>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
