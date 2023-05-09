import { useState } from "react";
import { login } from "../../API/AuthenticationApiCalls";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';




export default function Login() {
  /** Jack to play with this component while working out authentication side of things */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    login({
      email: email,
      password: password,
    }).then((response) => {
      console.log("FROM BACKEND:   ", response);
      if (response.token) {
        localStorage.setItem("JWT", response.token);
        localStorage.setItem("userID", response.userID)
        console.log("JWT FROM LOCALSTORAGE:  ", localStorage.getItem("JWT"));
      }
    });
  };

  return (
    <>
      <h1>LOGIN PAGE</h1>
      <Container fluid className="d-flex align-items-center min-vh-100">
      <Row className="justify-content-center w-100">
      <Col md={6} className="text-center" >
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          Email:
          <Form.Control type="text" value={email} onChange={handleEmailChange} />
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
<Form.Group>
        <Button variant="primary" type="submit">Log in</Button>
        </Form.Group>
      </Form>
      </Col>
      </Row>
      </Container>
    </>
  );
}



