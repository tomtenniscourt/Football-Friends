import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload/ProfilePictureUpload";
import { getOneUser, updateUser } from "../../API/UserApiCalls";
import AdmiredPlayerListItem from "./AdmiredPlayerListItem";
import "../../Styling/styles.css";

import {
  deleteAdmiredPlayer,
  updateAdmiredPlayer,
  createAdmiredPlayer,
} from "../../API/PlayersAdmiredApiCalls";

function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const [admiredPlayers, setAdmiredPlayers] = useState(
    <h4>No Admired Players</h4>
  );

  const [imageSrc, setImageSrc] = useState(
    "https://example.com/profile-picture.jpg"
  );

  const [changingFavTeam, setChangingFavTeam] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(userInfo.favouriteTeam);
  const [newAdmiredPlayer, setNewAdmiredPlayer] = useState({
    name: "",
    age: "",
    club: "",
    reasonAdmired: "",
  });

  const addAdmiredPlayer = (event) => {
    event.preventDefault();
    createAdmiredPlayer(localStorage.getItem("userID"), newAdmiredPlayer)
      .then((output) => setUserInfo(output))
      .catch((error) => console.log(error));
    setNewAdmiredPlayer({
      name: "",
      age: "",
      club: "",
      reasonAdmired: "",
    });
  };

  function handleDeleteAdmiredPlayer(e, playerID) {
    e.preventDefault();
    deleteAdmiredPlayer(localStorage.getItem("userID"), playerID)
      .then(() =>
        userInfo.playersAdmired.filter((player) => player._id !== playerID)
      )
      .then((output) => {
        setUserInfo({ ...userInfo, playersAdmired: output });
        console.log(userInfo);
      });
  }

  function handleEditAdmiredPlayer(e, playerID, data) {
    e.preventDefault();
    updateAdmiredPlayer(localStorage.getItem("userID"), playerID, data).then(
      (output) => setUserInfo(output)
    );
  }

  useEffect(() => {
    getOneUser(localStorage.getItem("userID")).then((output) =>
      setUserInfo(output)
    );
  }, []);

  useEffect(() => {
    if (userInfo.playersAdmired) {
      if (userInfo.playersAdmired.length > 0) {
      }
    }
    if (userInfo.playersAdmired && userInfo.playersAdmired.length > 0) {
      setAdmiredPlayers(
        userInfo.playersAdmired.map((player, index) => {
          return (
            <AdmiredPlayerListItem
              handleDeleteAdmiredPlayer={handleDeleteAdmiredPlayer}
              handleEditAdmiredPlayer={handleEditAdmiredPlayer}
              playerInfo={player}
              key={index}
              mine={true}
            />
          );
        })
      );
    } else {
      setAdmiredPlayers(<h6>No Admired Players</h6>);
    }
  }, [userInfo]);

  const handleTeamSelect = (event) => {
    setSelectedTeam(event.target.value);
    setUserInfo({ ...userInfo, favoriteTeam: event.target.value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    setChangingFavTeam(!changingFavTeam);
    updateUser(localStorage.getItem("userID"), userInfo).then((result) =>
      console.log(result)
    );
    setSelectedTeam("");
  };

  function handleEditSubmit(event) {
    setEditing(!editing);
    updateUser(localStorage.getItem("userID"), userInfo).then((result) =>
      console.log(result)
    );
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setUserInfo({
      ...userInfo,
      [evt.target.name]: value,
    });
  }

  return (
    <Container fluid className="d-flex flex-column">
      <br />
      <Col></Col>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "30vh" }}
      >
        <div
          style={{
            height: "350px",
            width: "350px",
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
            }}
          />
        </div>
      </div>
      <Row className="mt-3 justify-content-center">
        <Col md={8}>
          <Card className="mb-3 card-user shadow">
            <Card.Body>
              {editing ? (
                <>
                  <Form.Group>
                    <Form.Label>Profile Name:</Form.Label>
                    <Form.Control
                      type="text"
                      value={userInfo.profileName || ""}
                      onChange={handleChange}
                      required
                      name="profileName"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleEditSubmit(event);
                        }
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Location:</Form.Label>
                    <Form.Control
                      type="text"
                      value={userInfo.location || ""}
                      onChange={handleChange}
                      name="location"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleEditSubmit(event);
                        }
                      }}
                    />
                  </Form.Group>
                  <Button
                    className="subtle-animation shadow mt-2"
                    variant="success"
                    onClick={(event) =>
                      editing ? handleEditSubmit(event) : setEditing(!editing)
                    }
                  >
                    {editing ? "Save" : "Edit Profile"}
                  </Button>
                </>
              ) : (
                <>
                  <h2>
                    {" "}
                    <strong class="fw-bold">{userInfo.profileName}</strong>
                  </h2>
                  <p>
                    <strong class="fw-bold">Location:</strong>{" "}
                    {userInfo.location || "Not yet set"}
                  </p>
                  <Button
                    className="subtle-animation shadow"
                    variant="dark btn-sm"
                    onClick={(event) =>
                      editing ? handleEditSubmit(event) : setEditing(!editing)
                    }
                  >
                    {editing ? "Save" : "Edit Profile"}
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3 card-favorite shadow">
            <Card.Body>
              <h3>
                <strong class="fw-bold">Favorite Team:</strong>{" "}
                {userInfo.favouriteTeam || "not chosen"}
              </h3>
              {!changingFavTeam && (
                <Button
                  className="subtle-animation shadow"
                  variant="dark btn-sm"
                  onClick={() => setChangingFavTeam(!changingFavTeam)}
                >
                  Choose Favorite Team
                </Button>
              )}

              {changingFavTeam && (
                <Form onSubmit={handleSave}>
                  <Form.Group>
                    <Form.Label htmlFor="team-select"></Form.Label>
                    <Form.Control
                      as="select"
                      id="team-select"
                      value={selectedTeam || ""}
                      onChange={handleTeamSelect}
                    >
                      <option value="">Choose a team</option>
                      <option value="Arsenal">Arsenal</option>
                      <option value="Aston Villa">Aston Villa</option>
                      <option value="Bournemouth">Bournemouth</option>
                      <option value="Brentford">Brentford</option>
                      <option value="Brighton & Hove Albion">
                        Brighton & Hove Albion
                      </option>
                      <option value="Chelsea">Chelsea</option>
                      <option value="Crystal Palace">Crystal Palace</option>
                      <option value="Everton">Everton</option>
                      <option value="Fulham">Fulham</option>
                      <option value="Leeds United">Leeds United</option>
                      <option value="Leicester City">Leicester City</option>
                      <option value="Liverpool">Liverpool</option>
                      <option value="Manchester City">Manchester City</option>
                      <option value="Manchester United">
                        Manchester United
                      </option>
                      <option value="Newcastle United">Newcastle United</option>
                      <option value="Nottingham Forest">
                        Nottingham Forest
                      </option>
                      <option value="Southampton">Southampton</option>
                      <option value="Tottenham Hotspur">
                        Tottenham Hotspur
                      </option>
                      <option value="Wolverhampton Wanderers">
                        Wolverhampton Wanderers
                      </option>
                    </Form.Control>
                  </Form.Group>
                  <Button
                    className="subtle-animation shadow mt-2"
                    variant="success btn-sm"
                    type="submit"
                  >
                    Save
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3 card-addAdmired shadow">
            <Card.Body>
              <h3>
                <strong class="fw-bold">Add Admired Player</strong>
              </h3>
              <Form onSubmit={addAdmiredPlayer}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label htmlFor="player-name">
                        Player Name:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="player-name"
                        value={newAdmiredPlayer.name}
                        onChange={(e) =>
                          setNewAdmiredPlayer({
                            ...newAdmiredPlayer,
                            name: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label htmlFor="player-age">Player Age:</Form.Label>
                      <Form.Control
                        type="text"
                        id="player-age"
                        value={newAdmiredPlayer.age}
                        onChange={(e) =>
                          setNewAdmiredPlayer({
                            ...newAdmiredPlayer,
                            age: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label htmlFor="player-club">
                        Player Club:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="player-club"
                        value={newAdmiredPlayer.club}
                        onChange={(e) =>
                          setNewAdmiredPlayer({
                            ...newAdmiredPlayer,
                            club: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label htmlFor="player-reason">
                        Reason Admired:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="player-reason"
                        value={newAdmiredPlayer.reasonAdmired}
                        onChange={(e) =>
                          setNewAdmiredPlayer({
                            ...newAdmiredPlayer,
                            reasonAdmired: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="subtle-animation shadow"
                  variant="dark btn-sm"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Add Player
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-5 card-admired shadow">
            <Card.Body>
              <h2>
                <strong class="fw-bold">Admired Players</strong>
              </h2>
              {admiredPlayers}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Profile;
