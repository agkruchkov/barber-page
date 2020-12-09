import React from "react";
import { Navbar, Nav, Collapse } from "bootstrap-4-react";

const Menu = () => {
  return (
    <Navbar expand="lg" light bg="light">
      <Navbar.Toggler target="#navbarSupportedContent" />
      <Collapse navbar id="navbarSupportedContent">
        <Navbar.Nav mr="auto">
          <Nav.Item active>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services">Services</Nav.Link>
          </Nav.Item>
        </Navbar.Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
