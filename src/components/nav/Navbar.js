import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/to-do">Todos</NavLink>
        <NavLink to="/component">Component</NavLink>
        <NavLink to="/user">User</NavLink>

        {/* <Link to="/">Home</Link>
        <Link to="/to-do">Todos</Link>
        <Link to="/component">Component</Link>
        <Link to="#about">About</Link> */}
      </div>
    );
  }
}

export default Navbar;
