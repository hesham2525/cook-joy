import React from "react";
import logoImg from '../utils/img/logoo.jpg';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function Header1() {
  return (
    <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
      <Container>
        <div className="d-flex align-items-center justify-content-center">
          <img
            src={logoImg}
            alt="Logo"
            width="80"
            height="80"
            className="d-inline-block align-top me-2"
          />
            <p className="text-uppercase fw-bold">Cook & Joy   </p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <Nav.Link href="/" className="active text-uppercase">
              Home
            </Nav.Link>
            <Nav.Link href="/menu" className="text-uppercase">
              Menu
            </Nav.Link>
            <Nav.Link href="/about" className="text-uppercase">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="text-uppercase">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
