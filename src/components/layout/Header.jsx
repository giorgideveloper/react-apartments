import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsBuildingFillAdd, BsFillPersonFill } from "react-icons/bs";

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Apartments
          </Link>

          <button
            className="navbar-toggler"
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
                <Link
                  className={`btn btn-info ${
                    pathname === "/login" ? "btn-warning" : ""
                  }`}
                  to="login"
                >
                  <BsFillPersonFill /> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
