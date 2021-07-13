import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">THE NEWS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="collapsenavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="" data-bs-toggle="dropdown">News Category</Link>
                <ul className="dropdown-menu text-center bg-danger">
                    <li><Link className="nav-link dropdown-link text-white" to="/sports">Sports News</Link></li>
                    <li><Link className="nav-link dropdown-link text-white" to="/business">Business News</Link></li>
                    <li><Link className="nav-link dropdown-link text-white" to="/technology">Technology News</Link></li>
                    <li><Link className="nav-link dropdown-link text-white" to="/science">Science News</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;