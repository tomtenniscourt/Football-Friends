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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((output) => setUsers(output));
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (users.length > 0) {
    ourUsers = users.map((user, index) => {
      return (
        <Col xs={12} sm={6} md={4} lg={3} key={user._id}>
          <UserThumbnail user={user} />
        </Col>
      );
    });
  }

  return (
    <Container>
      <h2 className="text-center">All Users</h2>
      <Row>
        {ourUsers}
      </Row>
    </Container>
  );
}
