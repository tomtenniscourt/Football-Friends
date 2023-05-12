// ViewAdmiredPlayer.jsx

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

// Possibly add Images that appear of the player, in the future.

  return (
    <div className="container">
      <h1 className="my-4">Admired Player</h1>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Name: {player.name}</h3>
          <h4 className="card-subtitle mb-2 text-muted">Age: {player.age}</h4>
          <h4 className="card-subtitle mb-2 text-muted">Club: {player.club}</h4>
          <h4 className="card-subtitle mb-2 text-muted">
            Reason Admired: {player.reasonAdmired}
          </h4>
        </div>
      </div>
    </div>
  );
}
