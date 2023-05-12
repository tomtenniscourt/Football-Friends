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
      <div
        style={{
          width: "330px",
          height: "330px",
          overflow: "hidden",
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto", // Center the div horizontally
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
      
      <h2 className="text-center" style={{ marginTop: "30px" }}>Likes Received</h2>
      <Row>
        {ourUsers}
      </Row>
    </Container>
  );
}