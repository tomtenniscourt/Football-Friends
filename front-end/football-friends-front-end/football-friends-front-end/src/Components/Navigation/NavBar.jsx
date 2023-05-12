import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useContext } from "react";
import Image from "react-bootstrap/Image";

export default function NavBar() {
  /** Could do with some styling */
  const { isLoggedIn } = useContext(AuthContext);

  //   return (
  //     <Navbar
  //       collapseOnSelect
  //       expand="lg"
  //       bg="dark"
  //       variant="dark"
  //       style={{ height: "75px", padding: "0 10px" }}
  //     >
  //       <Navbar.Brand href={isLoggedIn ? "/" : "/login"}>
  //         <div
  //           style={{
  //             height: "80px",
  //             width: "80px",
  //             overflow: "hidden",
  //             borderRadius: "50%",
  //             backgroundColor: "transparent",
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <img
  //             src="https://i.imgur.com/AGm0oCR.png"
  //             alt="your-image-description"
  //             className="img-fluid"
  //             style={{
  //               width: "auto",
  //               height: "auto",
  //               clipPath: "circle(38% at 50% 50%)",
  //               transition: "transform 0.2s ease-in-out",
  //             }}
  //             onMouseEnter={(e) => {
  //               e.currentTarget.style.transform = "scale(1.15) rotate(720deg)";
  //             }}
  //             onMouseLeave={(e) => {
  //               e.currentTarget.style.transform = "scale(1) rotate(0deg)";
  //             }}
  //           />
  //         </div>
  //       </Navbar.Brand>

  //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  //       <Navbar.Collapse id="responsive-navbar-nav" style={{ zIndex: 1 }}>
  //         <Nav variant="tabs" className="me-auto" style={{ marginRight: "auto" }}>
  //           <Nav.Link href={isLoggedIn ? "/profile" : "/login"}>Profile</Nav.Link>
  //           <Nav.Link href={isLoggedIn ? "/AllUsers" : "/login"}>
  //             Search All Users
  //           </Nav.Link>
  //           <Nav.Link href={isLoggedIn ? "/LikesReceived" : "/login"}>
  //             Likes Received
  //           </Nav.Link>
  //           <Nav.Link href={isLoggedIn ? "/LikesSent" : "/login"}>
  //             Likes Sent
  //           </Nav.Link>
  //           <Nav.Link href={isLoggedIn ? "/friends" : "/login"}>
  //             👍Friends
  //             <span
  //               style={{
  //                 display: "inline-block",
  //                 transform: "scaleX(-1)",
  //               }}
  //             >
  //               {" "}
  //               👍{" "}
  //             </span>
  //           </Nav.Link>
  //         </Nav>

  //         <Nav variant="tabs" style={{ marginLeft: "auto" }}>
  //           <Nav.Link href="/login">{isLoggedIn ? "Log Out" : "Log In"}</Nav.Link>
  //           <Nav.Link href="/register">Register</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //       <style jsx>{`
  //         @media (max-width: 768px) {
  //           .navbar-brand img {
  //             height: 60px;
  //             width: 60px;
  //           }
  //         }
  //       `}</style>
  //     </Navbar>
  //   );
  // }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href={isLoggedIn ? "/" : "/login"}>
        <div
          style={{
            height: "80px",
            width: "80px",
            overflow: "hidden",
            borderRadius: "50%",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.imgur.com/AGm0oCR.png"
            alt="your-image-description"
            className="img-fluid"
            style={{
              width: "auto",
              height: "auto",
              clipPath: "circle(38% at 50% 50%)",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15) rotate(720deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="tabs" className="me-auto">
          <Nav.Link href={isLoggedIn ? "/profile" : "/login"}>Profile</Nav.Link>
          <Nav.Link href={isLoggedIn ? "/AllUsers" : "/login"}>
            Search All Users
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
            <span
              style={{
                display: "inline-block",
                transform: "scaleX(-1)",
              }}
            >
              {" "}
              👍{" "}
            </span>
          </Nav.Link>
          <Nav.Link href={isLoggedIn ? "/messages" : "/login"}>
            Messages
          </Nav.Link>
        </Nav>
        <Nav variant="tabs">
          <Nav.Link href="/login">{isLoggedIn ? "Log Out" : "Log In"}</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
