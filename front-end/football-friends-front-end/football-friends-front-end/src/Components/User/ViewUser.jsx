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

export default function ViewUser() {
  const location = useLocation();
  const id = location.state.id;

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getOneUser(id).then((output) => setUserInfo(output));
  }, []);

  return (
    <>
      <h3>This is our view user page</h3>
      <h2>Profile Name: {userInfo.profileName}</h2>
      <h3>Email: {userInfo.email}</h3>
    </>
  );
}
