import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./nav.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    // nav bar
    <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
        {/* nav logo */}
        <Navbar.Brand className="logo" href="/courses">
          DEEB COURSES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* navigation links */}
          <Nav className="ms-auto ">
            <Nav.Link className="title" as={NavLink} to="/">
              HOME
            </Nav.Link>
            <Nav.Link className="title" as={NavLink} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="title" as={NavLink} to="/contact-us">
              CONTACT-US
            </Nav.Link>
            <NavDropdown className="title" title="MORE" id="basic-nav-dropdown">
              <NavDropdown.Item className="title" as={NavLink} to="/courses">
                COURSES
              </NavDropdown.Item>
              <NavDropdown.Item className="title" as={NavLink} to="/for-free">
                FOR FREE
              </NavDropdown.Item>
              <NavDropdown.Item className="title" as={NavLink} to="/help">
                HELP
              </NavDropdown.Item>
              <NavDropdown.Item className="title" as={NavLink} to="/feedback">
                FEEDBACK
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Button
              className="btn"
              variant="secondary"
              as={NavLink}
              to="/signup"
            >
              join now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
