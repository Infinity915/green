import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "./CartContext"; // Import the cart context

function Header() {
  const { cart } = useCart(); // Access the cart from the context

  return (
    <Navbar bg="light" className="position-sticky">
      <Container>
        <Navbar.Brand className="text-success fw-bolder fs-3">Green</Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/Team">Team</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Cart">
            <FaCartShopping />
            <sup>{cart.length}</sup> {/* Dynamically updates the cart length */}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
