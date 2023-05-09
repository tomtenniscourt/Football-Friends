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
import { getOneUser } from "../../API/UserApiCalls";
import { useState, useEffect } from "react";
import AdmiredPlayerListItem from "./AdmiredPlayerListItem";

export default function ViewUser() {
  const location = useLocation();
  const id = location.state.id;

  const [userInfo, setUserInfo] = useState({});
  const [admiredPlayers, setAdmiredPlayers] = useState(
    <h4>No Admired Players</h4>
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
          return <AdmiredPlayerListItem playerInfo={player} key={player._id} />;
        })
      );
    }
  }, [userInfo]);

  return (
    <>
      <h3>This is our view user page</h3>
      <h2>Profile Name: {userInfo.profileName}</h2>
      <h3>Email: {userInfo.email}</h3>
      <h3>Admired Players:</h3>
      {admiredPlayers}
    </>
  );
}
