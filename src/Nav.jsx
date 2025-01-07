// //Normal code without navbar dropdown close for mobile and tab devices
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "./Images/WingsWay logo.png";
// import "./App.css";

// function NavMenu() {
//   return (
//     <Navbar expand="lg" className="bg-body-white" >
//       <Container>
//         <img
//           src={logo}
//           className="img-fluid responsive-logo"
//           alt="WingsWay logo"
//         />

//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             {/* Navigation Links Here */}
//           </Nav>
//           <Button
//             style={{ background: "#0d278e" }}
//             className="btn-lg w-100 d-lg-none Contactbutton" // 100% width only on collapsed
//           >
//             Contact us
//           </Button>
//           <Button
//             style={{ background: "#0d278e" }}
//             className="btn-lg  d-none d-lg-inline Contactbutton" // Normal width on large screens
//           >
//             Contact us
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavMenu;

import React, { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Images/WingsWay logo.png";
import "./App.css";

function NavMenu() {
  const [expanded, setExpanded] = useState(false); // Manage navbar collapse
  const [hideNavbar, setHideNavbar] = useState(false); // Hide navbar on scroll
  const [showDropdown, setShowDropdown] = useState(false); // Manage dropdown visibility on hover
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleDropdownToggle = (nextShow) => {
    setShowDropdown(nextShow);
  };

  useEffect(() => {
    // Function to handle click and focus outside of the dropdown and navbar
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick); // Added touchstart for mobile devices
    document.addEventListener("focusin", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick); // Clean up touchstart event listener
      document.removeEventListener("focusin", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactButtonClick = () => {
    if (window.innerWidth <= 991) { // Only for mobile/tablet sizes
      setExpanded(false); // Close the navbar
      // window.location.reload(); // Reload the current page
    }
  };
  // const handleContactClick = () => {
 
  //     window.location.reload(); // Reload the current page

  // };

  return (
    <Navbar
      ref={navbarRef}
      collapseOnSelect
      expand="lg"
      className={`bg-body-white  ${hideNavbar ? "hidden" : ""}`}
      // fixed="top"
      expanded={expanded}
      style={{ backgroundColor: "white" }}
    >
      <Container style={{ backgroundColor: "white" }}>
        <img
          src={logo}
          className="img-fluid responsive-logo"
          alt="WingsWay logo"
        />

        {/* Toggle button to collapse/expand the navbar */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={handleNavbarToggle} // Toggle navbar collapse on button click
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* Navigation Links Here */}
          </Nav>

          {/* Mobile Dropdown Button */}
          <Button
            style={{ background: "#0d278e" }}
            onMouseEnter={() => handleDropdownToggle(true)} // Show dropdown on hover
            onMouseLeave={() => handleDropdownToggle(false)} // Hide dropdown on hover
            ref={dropdownRef}
            className="btn-lg w-100 d-lg-none Contactbutton" // 100% width only on collapsed
            onClick={handleContactButtonClick} // Close the navbar on mobile when clicked
          >
            Contact us
          </Button>

          {/* Regular Desktop Button */}
          <Button
            style={{ background: "#0d278e" }}
            className="btn-lg  d-none d-lg-inline Contactbutton" // Normal width for larger screens
            // onClick={handleContactClick}
          >
            Contact us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
