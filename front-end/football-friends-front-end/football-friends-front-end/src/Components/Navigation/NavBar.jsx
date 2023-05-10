import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useContext } from "react";

export default function NavBar() {
  /** Could do with some styling */
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href={isLoggedIn ? "/" : "/login"}>
        👍Football Friends
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
          👍
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="tabs" className="me-auto">
          <Nav.Link href={isLoggedIn ? "/profile" : "/login"}>Profile</Nav.Link>
          <Nav.Link href={isLoggedIn ? "/AllUsers" : "/login"}>
            All Users
          </Nav.Link>
          <Nav.Link href={isLoggedIn ? "/search" : "/login"}>Search</Nav.Link>
          <Nav.Link href={isLoggedIn ? "/LikesReceived" : "/login"}>
            Likes Received
          </Nav.Link>
          <Nav.Link href={isLoggedIn ? "/LikesSent" : "/login"}>
            Likes Sent
          </Nav.Link>
          <Nav.Link href={isLoggedIn ? "/friends" : "/login"}>
            👍Friends
            <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
              {" "}
              👍{" "}
            </span>
          </Nav.Link>
          <Nav.Link href={isLoggedIn ? "/messages" : "/login"}>
            Messages
          </Nav.Link>
        </Nav>

        <Nav variant="tabs">
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// <nav style={{ fontSize: "18px", display: "flex", justifyContent: "space-between" }}>
// <div>
//   <Link to="/" style={{ color: "darkblue" }}>
//     Homepage
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/profile" style={{ color: "darkblue" }}>
//     My Profile
//   </Link>
// &nbsp; | &nbsp;
// <Link to="/AllUsers" style={{ color: "darkblue" }}>
//   All Users
// </Link>
//   &nbsp; | &nbsp;
//   <Link to="/friends" style={{ color: "darkblue" }}>
//     My Football Friends
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/messages" style={{ color: "darkblue" }}>
//     My Messages
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/search" style={{ color: "darkblue" }}>
//     Search
//   </Link>
// </div>
// <div>
//   <Link to="/login" style={{ color: "darkblue" }}>
//     Log in/out
//   </Link>
//   &nbsp; | &nbsp;
//   <Link to="/register" style={{ color: "darkblue" }}>
//     Register
//   </Link>
// </div>

// </nav>
