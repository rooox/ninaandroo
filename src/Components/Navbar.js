import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="routes_container">
          <NavLink
            to="/about"
            className="route_container"
            activeClassName="route_container_active"
            style={{ textDecoration: "none" }}
          >
            <p className="route_links">ABOUT</p>
          </NavLink>
          <NavLink
            to="/videos"
            className="route_container"
            activeClassName="route_container_active"
            style={{ textDecoration: "none" }}
          >
            <p className="route_links">VIDEOS</p>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <p className="ninaandroo">nina & roo</p>
          </NavLink>
          <NavLink
            to="/blog"
            className="route_container"
            activeClassName="route_container_active"
            style={{ textDecoration: "none" }}
          >
            <p className="route_links">BLOG</p>
          </NavLink>
          <NavLink
            to="/contact"
            className="route_container"
            activeClassName="route_container_active"
            style={{ textDecoration: "none" }}
          >
            <p className="route_links">CONTACT</p>
          </NavLink>
          {/* <Link to="/merch">
          <p>Merch</p></div>
        </Link> */}
        </div>
      </div>
    );
  }
}
