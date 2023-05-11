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
    <Container fluid className="vh-100 d-flex flex-column">
      <br />
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

      <h2 className="text-center" style={{ marginTop: "30px" }}>
        Likes Received
      </h2>
      <Row>{ourUsers}</Row>
    </Container>
  );
}