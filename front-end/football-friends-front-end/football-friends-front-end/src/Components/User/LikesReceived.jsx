import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";
import { Container, Row, Col } from "react-bootstrap";

export default function LikesReceived() {
  const [receivedLikes, setReceivedLikes] = useState([]);

  useEffect(() => {
    getAllUsers().then((output) => {
      const filteredUsers = output.filter((user) => {
        return user.likesSent.includes(localStorage.getItem("userID"));
      });

      setReceivedLikes(filteredUsers);
    });
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (receivedLikes.length > 0) {
    ourUsers = receivedLikes.map((user, index) => {
      return (
        <Col xs={12} sm={6} md={4} lg={3} key={user._id}>
          <UserThumbnail user={user} />
        </Col>
      );
    });
  }

  return (
    <Container>
      <h2 className="text-center">Likes Received</h2>
      <Row>
        {ourUsers}
      </Row>
    </Container>
  );
}