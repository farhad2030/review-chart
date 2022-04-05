import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
      <div className="container ">
        <Link to="" className="navbar-brand" href="#">
          ComReview
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </Link>
            <Link to="/reviews" className="nav-link" href="#">
              Reviews
            </Link>
            <Link to="/dashboard" className="nav-link" href="#">
              Deshboard
            </Link>
            <Link to="/blog" className="nav-link" href="#">
              Blog
            </Link>
            <Link to="/about" className="nav-link" href="#">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
