//Normal code without navbar dropdown close for mobile and tab devices
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Images/WingsWay logo.png";
import "./App.css";

function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-white" >
      <Container>
        <img
          src={logo}
          className="img-fluid responsive-logo"
          alt="WingsWay logo"
        />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* Navigation Links Here */}
          </Nav>
          <Button
            style={{ background: "#0d278e" }}
            className="btn-lg w-100 d-lg-none Contactbutton" // 100% width only on collapsed
          >
            Contact us
          </Button>
          <Button
            style={{ background: "#0d278e" }}
            className="btn-lg  d-none d-lg-inline Contactbutton" // Normal width on large screens
          >
            Contact us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;