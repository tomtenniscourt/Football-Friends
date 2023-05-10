import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";
import { Container, Row, Col } from "react-bootstrap";

export default function LikesSent() {
  const [sentLikes, setSentLikes] = useState([]);

  useEffect(() => {
    getAllUsers().then((output) => {
      const filteredUsers = output.filter((user) => {
        return user.likesReceived.includes(localStorage.getItem("userID"));
      });

      setSentLikes(filteredUsers);
    });
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (sentLikes.length > 0) {
    ourUsers = sentLikes.map((user, index) => {
      return (
        <Col xs={12} sm={6} md={4} lg={3} key={user._id}>
          <UserThumbnail user={user} />
        </Col>
      );
    });
  }

  return (
    <Container>
      <h2 className="text-center">Likes Sent</h2>
      <Row>
        {ourUsers}
      </Row>
    </Container>
  );
}
