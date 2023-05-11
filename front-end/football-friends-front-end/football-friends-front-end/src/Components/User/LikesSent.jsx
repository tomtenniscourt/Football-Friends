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
        Likes Sent
      </h2>
      <Row>{ourUsers}</Row>
    </Container>
  );
}
