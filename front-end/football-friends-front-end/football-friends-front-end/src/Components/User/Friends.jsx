import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";
import { Container, Row, Col } from "react-bootstrap";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getAllUsers().then((output) => 

    {
       const filteredUsers = output.filter((user) => {
            return (user.likesSent.includes(localStorage.getItem("userID")) && 
            user.likesReceived.includes(localStorage.getItem("userID")))
        });
            
            
            
        setFriends(filteredUsers)});
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (friends.length > 0) {
    ourUsers = friends.map((user, index) => {
      return (
        <Col xs={12} sm={6} md={4} lg={3} key={user._id}>
          <UserThumbnail user={user} />
        </Col>
      );
    });
  }

  return (
    <Container>
      <h2 className="text-center">Friends</h2>
      <Row>
        {ourUsers}
      </Row>
    </Container>
  );
}
