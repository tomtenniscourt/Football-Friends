import { useState, useContext, useEffect } from "react";
import { login } from "../../API/AuthenticationApiCalls";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../AuthContext/AuthContext";
import { getOneUser } from "../../API/UserApiCalls";

export default function Login() {
  /** Jack to play with this component while working out authentication side of things */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, loginAuth, logoutAuth } = useContext(AuthContext);

  useEffect(() => {});
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      email: email,
      password: password,
    }).then((response) => {
      console.log("FROM BACKEND:   ", response);
      if (response.token) {
        localStorage.setItem("JWT", response.token);
        localStorage.setItem("userID", response.userID);
        localStorage.setItem("profileName", response.profileName);
        loginAuth();

        console.log("JWT FROM LOCALSTORAGE:  ", localStorage.getItem("JWT"));
      }
    });
  };

  return (
    <>
      {!isLoggedIn && (
        <Container fluid className="vh-100 d-flex flex-column">
          <div
            style={{
              width: "350px",
              height: "350px",
              overflow: "hidden",
              borderRadius: "50%",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <img
              src="https://i.imgur.com/AGm0oCR.png"
              alt="your-image-description"
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                clipPath: "circle(38% at 50% 50%)",
              }}
            />
          </div>
          <Row className="flex-grow-1">
            <Col></Col>
            <Col className="d-flex align-items-center justify-content-center"></Col>
            <Col></Col>
          </Row>
          <Row className="flex-grow-1">
            <Col></Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    Email:
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    Password:
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                  <Button
                    className="btn btn-dark subtle-animation"
                    type="submit"
                    style={{ margin: "0 10px" }}
                  >
                    Log in
                  </Button>
                </Form.Group>
              </Form>{" "}
            </Col>
            <Col></Col>
          </Row>
          <Row className="flex-grow-1">
            <Col></Col>
            <Col className="d-flex align-items-center justify-content-center"></Col>
            <Col></Col>
          </Row>
          <Row className="flex-grow-1">
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className="flex-grow-1">
            <Col></Col>
            <Col className="d-flex align-items-center justify-content-center">
              <p className="text-center">
                Don’t have an account? <a href="/register"> Sign up now!</a>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
      {isLoggedIn && (
        <Container fluid className="vh-100 d-flex flex-column">
          <div
            style={{
              width: "350px",
              height: "350px",
              overflow: "hidden",
              borderRadius: "50%",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <img
              src="https://i.imgur.com/AGm0oCR.png"
              alt="your-image-description"
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                clipPath: "circle(38% at 50% 50%)",
              }}
            />
          </div>
          <Row className="flex-grow-1">
            <Col></Col>
            <Col className="d-flex align-items-center justify-content-center">
              <h2>Hello {localStorage.getItem("profileName")}!</h2>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col className="d-flex align-items-start justify-content-center mt-auto">
              <Button
                className="btn btn-dark subtle-animation"
                onClick={logoutAuth}
                style={{ margin: "0 1px" }}
              >
                Log Out
              </Button>
            </Col>
            <Col></Col>
          </Row>
          <Row className="flex-grow-1">
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </>
  );
}
