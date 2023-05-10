import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";

export default function LikesSent() {
  const [sentLikes, setSentLikes] = useState([]);

  useEffect(() => {
    getAllUsers().then((output) => 

    {
       const filteredUsers = output.filter((user) => {
            return user.likesReceived.includes(localStorage.getItem("userID"))
        });
        setSentLikes(filteredUsers)});
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (sentLikes.length > 0) {
    ourUsers = sentLikes.map((user, index) => {
      return <UserThumbnail user={user} key={user._id}></UserThumbnail>;
    });
  }
  return (
    <>
      <h2>Likes Sent</h2>
      {ourUsers}
    </>
  );
}
