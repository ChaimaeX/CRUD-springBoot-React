import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              <strong>Employee Management System</strong>
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Employer
            </Nav.Link>
            <Nav.Link as={Link} to="/employer" className="nav-link">
              Post Employer
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
