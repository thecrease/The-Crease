import React from "react";
import Linking from "react";
import {
  Navbar,
  Row,
  Col,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const NavBar = () => {
  return (
    // <Container>
    <Navbar className="opacity customNavbar h-110" expand="lg">
      <Container>
        <Navbar.Brand to="/">
          {" "}
          <img
            style={{ width: "60px", height: "60px" }}
            src={require("../../../assets/logo.png")}
          />
        </Navbar.Brand>
        <h5 style={{ color: "white", position: "relative", top: "2px" }}>
          The Crease
        </h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">Home</Link>
            {/* <Link to="/teams">Teams</Link> */}
            <Link to="/players">Players</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/ranking">Rankings</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/guru">Ask Guru</Link>
            <a href="https://crease-shop.herokuapp.com/">Shop</a>
            <a href="https://makersinfo.com/">Blog</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Container>
  );
};

export default NavBar;
