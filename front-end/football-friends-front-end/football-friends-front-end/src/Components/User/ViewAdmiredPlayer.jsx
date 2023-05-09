/**
 * This component will represent a page/route in our web app. Users can navigate here
 * by clicking on an 'AdmiredPlayerListItem' component from their 'Profile' page.
 *
 * It will display all of the same info from the 'AdmiredPlayerListItem' component
 * except users will actually be able to EDIT/UPDATE the information on this page and
 * update the backend accordingly
 */

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ViewAdmiredPlayer() {
  const location = useLocation();
  const playerInfo = location.state.playerInfo;
  const [player, SetPlayer] = useState(playerInfo);

  return (
    <>
      <h1> Admired Player</h1>;<h3>Name: {player.name} </h3>
      <h4>Age: {player.age}</h4>
      <h4>Club: {player.club}</h4>
      <h4>Reason Admired: {player.reasonAdmired}</h4>
    </>
  );
}
