import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "./navbar.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <Navbar color="faded" light expand="md" className="navbar">
      <NavbarBrand href="/" className="mr-auto col-4">
        <img
          className="main_logo"
          src="https://img.icons8.com/dusk/50/000000/coronavirus.png"
          alt="main_logo"
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto nav col-md-8">
          <NavItem className="nav-item">
            <Link to="/">Global Data</Link>
          </NavItem>
          <NavItem>
            <Link to="/states">India Data</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Example;
