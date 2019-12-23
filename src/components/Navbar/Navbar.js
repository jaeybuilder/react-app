import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const link = (href, text) => {
    return (
      <NavItem>
        <NavLink href={href}>{text}</NavLink>
      </NavItem>
    );
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {link("/", "Home")}
            {link("/games", "App")}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
