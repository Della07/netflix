import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <Link to="/">NETFLIX</Link>
    <div className="dropdown">
      <button className="dropbtn">
        Movies
        <i className="fa fa-caret-down" style={{ marginLeft: 10 }}></i>
      </button>
      <div className="dropdown-content">
        <Link replace to="/movies/new-release">
          New Release
        </Link>
        <Link replace to="/movies/trending-now">
          Trending Now
        </Link>
      </div>
    </div>
    <Link className="right" to="/sign-in">
      Sign In
    </Link>
  </nav>
);

export default NavBar;
