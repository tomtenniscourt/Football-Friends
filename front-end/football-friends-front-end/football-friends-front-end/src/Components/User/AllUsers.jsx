/**
 * The All users component should represent a page/route in our web app
 * It should use the api to 'getAllUsers' and then render each of those users
 * as a 'UserThumbnail' component.
 *
 * This component could also incorporate the 'search' bar at the top for example
 *
 */

import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";
import { Container, Row, Col } from "react-bootstrap";

export default function AllUsers() {
  const [users, setUsers] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    getAllUsers().then((output) => setUsers(output));
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (users.length > 0) {
    if (searchTerm) {
      let usersToRender = users.filter((user) => {
        let profileName = false;
        let age = false;
        let favouriteTeam = false;
        let location = false;

        if (user.profileName) {
          profileName =
            user.profileName.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1;
        }

        if (user.age) {
          age =
            JSON.stringify(user.age)
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1;
        }

        if (user.favouriteTeam) {
          favouriteTeam =
            user.favouriteTeam.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1;
        }

        if (user.location) {
          location =
            user.location.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        }

        return !!(profileName || age || favouriteTeam || location);
      });

      ourUsers = usersToRender.map((user, index) => {
        return <UserThumbnail user={user} key={user._id}></UserThumbnail>;
      });
    } else {
      ourUsers = users.map((user, index) => {
        return (
          <Col xs={12} sm={6} md={4} lg={3} className="p-4" key={user._id}>
            <UserThumbnail user={user} />
          </Col>
        );
      });
    }

return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
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
    <>
      <h2 className="text-center" style={{ marginTop: "30px" }}>
        All Users
      </h2>
      <Container className="mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-lg-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for users"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="d-flex flex-wrap justify-content-center">{ourUsers}</div>
    </>
  </div>
);
  }
}
