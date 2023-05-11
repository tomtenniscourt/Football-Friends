/**
 * This component will be a page/route in our website
 *
 * Users can navigate to this page by clicking on a user's thumbnail in the 'AllUsers'
 * component.
 *
 * This component will make a call to the api and render all the information about
 * that user and it should be almost identical in format to the 'Profile' component
 *
 * This component will render the 'AdmiredPlayerListItem' components with the relevant
 * info from the api about this users' admired players
 *
 */

import { useLocation } from "react-router-dom";
import { getOneUser, updateUser } from "../../API/UserApiCalls";
import { useState, useEffect } from "react";
import AdmiredPlayerListItem from "./AdmiredPlayerListItem";
import { Button, Card } from "react-bootstrap";

export default function ViewUser() {
  const location = useLocation();
  const id = location.state.id;

  const [liked, setLiked] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [admiredPlayers, setAdmiredPlayers] = useState(
    <h5>No Admired Players ☹</h5>
  );

  useEffect(() => {
    getOneUser(id).then((output) => setUserInfo(output));
  }, []);

  useEffect(() => {
    console.log("userInfo updated", userInfo);
    if (userInfo.playersAdmired) {
      console.log("condition 1 true");
      if (userInfo.playersAdmired.length > 0) {
        console.log("condition 2 true");
      }
    }

    if (userInfo.playersAdmired && userInfo.playersAdmired.length > 0) {
      setAdmiredPlayers(
        userInfo.playersAdmired.map((player, index) => {
          return (
            <AdmiredPlayerListItem
              playerInfo={player}
              key={player._id}
              mine={false}
            />
          );
        })
      );
    }
    if (userInfo.likesReceived) {
      setLiked(userInfo.likesReceived.includes(localStorage.getItem("userID")));
    }
  }, [userInfo]);
  function handleClick(e) {
    e.preventDefault();
    const likesReceivedData = [
      ...userInfo.likesReceived,
      localStorage.getItem("userID"),
    ];
    updateUser(userInfo._id, { likesReceived: likesReceivedData })
      .then((res) => setUserInfo(res))
      .catch((err) => console.log(err));

    getOneUser(localStorage.getItem("userID")).then((result) => {
      console.log(result.likesSent);
      const likesSentData = [...result.likesSent, userInfo._id];
      updateUser(result._id, { likesSent: likesSentData });
    });
  }
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>Say hi to {userInfo.profileName}</Card.Title>
        <Button
          variant={liked ? "secondary" : "primary"}
          onClick={(e) => {
            if (!liked) {
              handleClick(e);
            }
          }}
        >
          {liked ? "Liked Already" : "like"}
        </Button>
        <Card.Text>Favorite Team: {userInfo.favouriteTeam}</Card.Text>
        <Card.Text>From: {userInfo.location}</Card.Text>
        <Card.Text> {userInfo.age}</Card.Text>
        <Card.Text>Admired Players:</Card.Text>
        {admiredPlayers}
      </Card.Body>
    </Card>
  );
}
