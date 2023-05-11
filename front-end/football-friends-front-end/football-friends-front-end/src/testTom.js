import { useState, useEffect } from "react";
import { test } from "../../API/AuthenticationApiCalls";
import { seedUsers } from "../../seed";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

// import { getAllUsers, getOneUser, updateUser } from "../../API/UserApiCalls";
// import { createAdmiredPlayer, deleteAdmiredPlayer, updateAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";
// import { createUser } from "../../API/AuthenticationApiCalls";
export default function Homepage() {
  /**** TBC on what content should go here. Potentially use a third party API to
   * populate this with football news or info on some random football players ****/
  const [message, setMessage] = useState("");
  useEffect(() => {
    test()
      .then((result) => result.message)
      .then((output) => setMessage(output));
  }, []);

  const [localUsers, setLocalUsers] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [clubUsers, setClubUsers] = useState([]);

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    if (location) {
      const filteredUsers = seedUsers.filter(
        (user) => user.location === location
      );
      setLocalUsers(filteredUsers);
    } else {
      setLocalUsers(seedUsers);
    }
  };

  const handleClubChange = (e) => {
    const club = e.target.value;
    setSelectedClub(club);
    if (club) {
      const filteredUsers = seedUsers.filter(
        (user) => user.favouriteClub === club
      );
      setClubUsers(filteredUsers);
    } else {
      setClubUsers(seedUsers);
    }
  };

  const filteredUsers = localUsers;

return (
  <Container fluid className="vh-100 d-flex flex-column">
    <br />
    <h1 className="text-center">
      👍🏻Football Friends
      <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
        👍🏻
      </span>
    </h1>
    <br />
    <br />
    <div className="homepage">
      <div className="row">
        <div className="col" style={{ border: "1px solid black" }}></div>
        <div className="col">
          <div className="localUsers" style={{ border: "1px solid black" }}>
            <h2 className="text-center">Local Football Friends</h2>
            <Form.Label>Find Football friends in...</Form.Label>
            <Form.Select
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="Set Location">Select Location</option>
              <option value="">United Kingdom</option>
              <option value="Cambridgeshire">Cambridgeshire</option>
            </Form.Select>
            <ul>
              {localUsers.map((user) => (
                <li key={user.email}>
                  {user.profileName}
                  <br />
                  {user.favouriteClub}
                  <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col" style={{ border: "1px solid black" }}>
          <div className="userLikeThis">
            <h2 className="text-center"> My Club Football Friends</h2>
            <Form.Label>Football friends who support... </Form.Label>
            <Form.Select onChange={handleClubChange} value={selectedClub}>
              <option value="">Select a team</option>
              <option value="Arsenal">Arsenal</option>
              <option value="Aston Villa">Aston Villa</option>
            </Form.Select>
            <ul>
              {clubUsers.map((user) => (
                <li key={user.id}>{user.profileName}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col" style={{ border: "1px solid black" }}></div>
      </div>
      <div className="row flex-grow-1">
        <div className="col" style={{ border: "1px solid black" }}></div>
        <div className="col d-flex flex-column justify-content-center">
          <div className="newUsers" style={{ border: "1px solid black" }}>
            <h2 className="text-center">New Football Friends</h2>
          </div>
        </div>
        <div
          className="col d-flex flex-column justify-content-center"
          style={{ border: "1px solid black" }}
        >
          <br />

          <div className="trendingUsers">
            <h2 className="text-center">Trending Football Friends</h2>
          </div>
        </div>
        <div className="col" style={{ border: "1px solid black" }}></div>
      </div>
    </div>
  </Container>
);


}

// const test = getAllUsers()
// console.log(test)

// const test2 = getOneUser("6454e712e12f643ac6218e6a")
// console.log(test2)

// const test3 = createUser({
//   email: "test frontend email",
//   password: "frontend pass test"
// })
// console.log(test3)

// const test4 = updateUser("64567cde27c32f9e4e6f7cc6", {
//   email: "updated frontend email"
// })
// console.log(test4)

// const test5 = createAdmiredPlayer("64567cde27c32f9e4e6f7cc6", {
//   name: "test 3 name",
//   reasonAdmired: "test 3 test"
// })
// console.log(test5)

// const test6 = deleteAdmiredPlayer("64567cde27c32f9e4e6f7cc6", "64567f7227c32f9e4e6f7ce2")
// console.log(test6)

// const test7 = updateAdmiredPlayer("64567cde27c32f9e4e6f7cc6", "6456803b27c32f9e4e6f7d22", {
//   name: "new test",
//   reasonAdmired: "hi"
// })
// console.log(test7)
