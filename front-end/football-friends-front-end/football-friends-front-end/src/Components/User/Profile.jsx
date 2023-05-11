// Profile.jsx

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload/ProfilePictureUpload";
import { getOneUser, updateUser } from "../../API/UserApiCalls";
import AdmiredPlayerListItem from "./AdmiredPlayerListItem";

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
  // const [username, setUsername] = useState("johndoe");
  // const [name, setName] = useState("John Doe");
  // const [location, setLocation] = useState("New York");
  const [selectedTeam, setSelectedTeam] = useState(userInfo.favouriteTeam);
  // const [favoriteTeam, setFavoriteTeam] = useState("");
  // const [favoriteTeamReason, setFavoriteTeamReason] = useState("");
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
      // .then(() =>
      //   getOneUser(localStorage.getItem("userID")).then((output) => {
      //     console.log("User from Backend: ******", output);

      //     setUserInfo(output);
      //   })
      // );
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
    // console.log("userInfo updated", userInfo);
    if (userInfo.playersAdmired) {
      // console.log("condition 1 true");
      if (userInfo.playersAdmired.length > 0) {
        // console.log("condition 2 true");
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
      setAdmiredPlayers(<h4>No Admired Players</h4>);
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

  // const handleReasonChange = (event) => {
  //   setFavoriteTeamReason(event.target.value);
  // };

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
    <Container>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={imageSrc} alt="Profile" />
            <Card.Body>
              <ProfilePictureUpload />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Button
                onClick={(event) =>
                  editing ? handleEditSubmit(event) : setEditing(!editing)
                }
              >
                {editing ? "✅" : "Edit Profile"}
              </Button>

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
                </>
              ) : (
                <>
                  <h2>Name: {userInfo.profileName}</h2>
                  <p>Location: {userInfo.location || "Not yet set"}</p>
                </>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <h3>Favorite Team: {userInfo.favouriteTeam || "not chosen"}</h3>
              {!changingFavTeam && (
                <Button onClick={() => setChangingFavTeam(!changingFavTeam)}>
                  Change Favorite Team
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
                  <Button type="submit">Save</Button>
                </Form>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <h3>Add Admired Player</h3>
              <Form onSubmit={addAdmiredPlayer}>
                <label htmlFor="player-name">Player Name:</label>
                <input
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

                <label htmlFor="player-age">Player Age:</label>
                <input
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

                <label htmlFor="player-club">Player Club:</label>
                <input
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

                <label htmlFor="player-reason">Reason Admired:</label>
                <input
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

                <button type="submit">Add Player</button>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h2>Admired Players</h2>
              {admiredPlayers}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Profile;
