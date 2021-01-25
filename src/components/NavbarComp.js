import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Input
} from "reactstrap";

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};

NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};

const NavbarComp = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Carousel</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Link
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="https://github.com/reactstrap/reactstrap">
                disabled
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Search"
              />
            </NavItem>
            <NavItem className="pl-2">
              <Button outline color="success">
                Submit
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
