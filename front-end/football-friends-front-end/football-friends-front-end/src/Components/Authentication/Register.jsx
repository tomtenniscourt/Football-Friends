import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { createUser } from "../../API/AuthenticationApiCalls";
import { useNavigate } from "react-router-dom";

export default function Register() {
  /** Jack to play with this component while working out authentication side of things */
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileName, setProfileName] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // add a state to track if passwords match

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleProfileNameChange = (event) => {
    setProfileName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleOptionChange = (event) => setSelectedOption(event.target.value);
  const handleLocationChange = (event) =>
    setSelectedLocation(event.target.value);

  const handleSubmit = (event) => {
    // FROM TOM - I have added code here to check that the two passwords match. If this is false, an alert will appear and the form will not submit
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      alert("Check again, your passwords do not match!");
      return;
    }

    createUser({
      email: email,
      password: password,
      profileName: profileName,
      location: selectedLocation,
      favouriteTeam: selectedOption,
      age: age,
    }).then((result) => {
      console.log("FROM BACKEND:   ", result);
    });

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setProfileName("");
    setAge("");
    navigate("/login");
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column">
      <Row className="flex-grow-1">
        <Col></Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div className="registerPage">
            <h1 className="d-flex align-items-center justify-content-center">
              Register
            </h1>
            <br />
            <div className="registerForm">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicProfileName">
                  <Form.Label>Profile Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={profileName}
                    onChange={handleProfileNameChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Age:</Form.Label>
                  <Form.Control
                    type="number"
                    value={age}
                    onChange={handleAgeChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFavouriteTeam">
                  <Form.Label>Favourite Team:</Form.Label>
                  <Form.Select
                    className="dropdownTeam"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    <option value="">Select a team</option>
                    <option value="Arsenal">Arsenal</option>
                    <option value="AstonVilla">Aston Villa</option>
                    <option value="Bournemouth">Bournemouth</option>
                    <option value="Brentford">Brentford</option>
                    <option value="Brighton&HoveAlbion">Brighton</option>
                    <option value="Chelsea">Chelsea</option>
                    <option value="CrystalPalace">Crystal Palace</option>
                    <option value="Everton">Everton</option>
                    <option value="LeedsUnited">Leeds United</option>
                    <option value="Fulham">Fulham</option>
                    <option value="LeicesterCity">Leicester City</option>
                    <option value="Liverpool">Liverpool</option>
                    <option value="ManchesterCity">Manchester City</option>
                    <option value="ManchesterUnited">Manchester United</option>
                    <option value="NewcastleUnited">Newcaste United</option>
                    <option value="NottinghamForest">Nottingham Forest</option>
                    <option value="Southampton">Southampton</option>
                    <option value="TottenhamHotspur">Tottenham Hotspurs</option>
                    <option value="WestHamUnited">Wet Ham United</option>
                    <option value="Wolves">Wolverhamton Wanderers</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCounty">
                  <Form.Label>Location:</Form.Label>
                  <Form.Select
                    className="dropdownCounty"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    <option value="">Select a county</option>
                    <option value="Avon">Avon</option>
                    <option value="Bedfordshire">Bedfordshire</option>
                    <option value="Berkshire">Berkshire</option>
                    <option value="Bristol">Bristol</option>
                    <option value="Buckinghamshire">Buckinghamshire</option>
                    <option value="Cambridgeshire">Cambridgeshire</option>
                    <option value="Cheshire">Cheshire</option>
                    <option value="Cleveland">Cleveland</option>
                    <option value="Cornwall">Cornwall</option>
                    <option value="Cumbria">Cumbria</option>
                    <option value="Derbyshire">Derbyshire</option>
                    <option value="Devon">Devon</option>
                    <option value="Dorset">Dorset</option>
                    <option value="Durham">Durham</option>
                    <option value="East Sussex">East Sussex</option>
                    <option value="Essex">Essex</option>
                    <option value="Gloucestershire">Gloucestershire</option>
                    <option value="Greater London">Greater London</option>
                    <option value="Greater Manchester">
                      Greater Manchester
                    </option>
                    <option value="Hampshire">Hampshire</option>
                    <option value="Hereford and Worcester">
                      Hereford and Worcester
                    </option>
                    <option value="Hertfordshire">Hertfordshire</option>
                    <option value="Humberside">Humberside</option>
                    <option value="Isle of Wight">Isle of Wight</option>
                    <option value="Kent">Kent</option>
                    <option value="Lancashire">Lancashire</option>
                    <option value="Leicestershire">Leicestershire</option>
                    <option value="Lincolnshire">Lincolnshire</option>
                    <option value="London">London</option>
                    <option value="Merseyside">Merseyside</option>
                    <option value="Norfolk">Norfolk</option>
                    <option value="North Yorkshire">North Yorkshire</option>
                    <option value="Northamptonshire">Northamptonshire</option>
                    <option value="Northumberland">Northumberland</option>
                    <option value="Nottinghamshire">Nottinghamshire</option>
                    <option value="Oxfordshire">Oxfordshire</option>
                    <option value="Shropshire">Shropshire</option>
                    <option value="Somerset">Somerset</option>
                    <option value="South Yorkshire">South Yorkshire</option>
                    <option value="Staffordshire">Staffordshire</option>
                    <option value="Suffolk">Suffolk</option>
                    <option value="Surrey">Surrey</option>
                    <option value="Tyne and Wear">Tyne and Wear</option>
                    <option value="Warwickshire">Warwickshire</option>
                    <option value="West Midlands">West Midlands</option>
                    <option value="West Sussex">West Sussex</option>
                    <option value="West Yorkshire">West Yorkshire</option>
                    <option value="Wiltshire">Wiltshire</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="d-flex justify-content-center">
                  <Button className="registerButton" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className="flex-grow-1">
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className="flex-grow-1">
        <Col></Col>
        <Col className="d-flex align-items-center justify-content-center"></Col>
        <Col></Col>
      </Row>
      <Row className="flex-grow-1">
        <Col></Col>
        <Col className="d-flex align-items-center justify-content-center">
          <p className="text-center">
            Already have an account? <a href="/login">Log in now!</a>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
