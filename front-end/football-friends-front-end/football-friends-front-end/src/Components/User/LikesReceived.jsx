import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";

export default function LikesReceived() {
  const [receivedLikes, setReceivedLikes] = useState([]);

  useEffect(() => {
    getAllUsers().then((output) => 

    {
       const filteredUsers = output.filter((user) => {
            return user.likesSent.includes(localStorage.getItem("userID"))
        });
        setReceivedLikes(filteredUsers)});
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (receivedLikes.length > 0) {
    ourUsers = receivedLikes.map((user, index) => {
      return <UserThumbnail user={user} key={user._id}></UserThumbnail>;
    });
  }
  return (
    <>
      <h2>Likes Received</h2>
      {ourUsers}
    </>
  );
}
