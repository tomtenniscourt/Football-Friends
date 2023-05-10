import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";

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
      return <UserThumbnail user={user} key={user._id}></UserThumbnail>;
    });
  }
  return (
    <>
      <h2>Friends</h2>
      {ourUsers}
    </>
  );
}
