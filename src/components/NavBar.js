import React, { useState } from "react";
import "./navbar.scss";

import { TbBuildingEstate } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from "./Alert";
import PropTypes from "prop-types";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [active, setactive] = useState("navBar");
  const showNav = () => {
    setactive("navBar activeNavbar");
  };
  const hideNav = () => {
    setactive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
        <NavLink exact to="/" className="logo flex">
        <h1>
              <TbBuildingEstate className="icon" />
              Real Estate
            </h1>
                </NavLink>
        
        </div>
        <div className={active}>
          <ul>
            <div className="navLists flex">
              <li className="navItem">
                <NavLink exact to="/" className="navLink flex">
                  <h1>Home</h1>
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink exact to="/listings" className="navLink flex">
                  <h1>Listings</h1>
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink exact to="/about" className="navLink flex">
                  <h1>About</h1>
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink exact to="/contact" className="navLink flex">
                  <h1>Contact</h1>
                </NavLink>
              </li>
              {!loading && (
                <Fragment>
                  {isAuthenticated ? (
                    <li className="navItem">
                      <NavLink
                        exact
                        to="/login"
                        onClick={logout}
                        className="navLink flex"
                      >
                        <h1>Logout</h1>
                      </NavLink>
                    </li>
                  ) : (
                    <Fragment>
                      <li className="navItem">
                        <NavLink exact to="/login" className="navLink flex">
                          <h1>Login</h1>
                        </NavLink>
                      </li>
                      <li className="navItem">
                        <NavLink exact to="/signup" className="navLink flex">
                          <h1>SignUp</h1>
                        </NavLink>
                      </li>
                    </Fragment>
                  )}
                </Fragment>
              )}

              <button className="btn">
                {!loading && isAuthenticated && (
                  <li className="navItem">
                    <NavLink
                      exact
                      to="/addListing" // Direct to AddListing if authenticated
                      className="navLink flex"
                    >
                      <h1>Add Listing</h1>
                    </NavLink>
                  </li>
                )}

                {!loading && !isAuthenticated && (
                  <Fragment>
                    <li className="navItem">
                      <NavLink exact to="/login" className="navLink flex">
                        <h1>Add Listing</h1>
                      </NavLink>
                    </li>
                  </Fragment>
                )}
              </button>
            </div>
            <div className="closeNavbar">
              <AiFillCloseCircle className="icon" onClick={hideNav} />
            </div>
          </ul>
        </div>
        <div className="toggleNavbar">
          <TbGridDots className="icon" onClick={showNav} />
        </div>
      </header>
      <Alert />
    </section>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
