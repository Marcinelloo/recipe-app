import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <Link to="/" className="link">
          <h1>PleasureEating</h1>
        </Link>
        <div className="searchBar">
          <Input type="text" placeholder="search..." />
        </div>
        <div className="navMenu">
          <Link className="link" to="/new-recipes">
            New recipes
          </Link>

          <Link className="link" to="/best-recpies">
            Best recipes
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
