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
import { updateAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";

export default function ViewAdmiredPlayer(props) {
  const location = useLocation();

  const playerInfo = location.state.playerInfo;
  const [player, setPlayer] = useState(playerInfo);
  const [name, setName] = useState(playerInfo.name);
  const [Age, setAge] = useState(playerInfo.age);
  const [club, setClub] = useState(playerInfo.club);
  const [reasonAdmired, setReasonAdmired] = useState(playerInfo.reasonAdmired);
  const [editing, setEditing] = useState(false);

  function handleChange(evt) {
    const value = evt.target.value;
    setPlayer({
      ...player,
      [evt.target.name]: value,
    });
  }

  function handleEditSubmit(event) {
    setEditing(!editing);
    updateAdmiredPlayer(
      localStorage.getItem("userID"),
      player._id,
      player
    ).then((result) => console.log(result));
    // handleEditAdmiredPlayer(event, playerInfo._id, player);
  }

  return (
    <>
      <button
        onClick={(event) =>
          editing ? handleEditSubmit(event) : setEditing(!editing)
        }
      >
        {editing ? "✅" : "Edit"}
      </button>
      <h1> Admired Player</h1>
      {editing ? (
        <>
          <label>
            Name:
            <input
              type="text"
              value={player.name || ""}
              onChange={handleChange}
              required
              name="name"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleEditSubmit(event);
                }
              }}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={player.age || ""}
              onChange={handleChange}
              name="age"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleEditSubmit(event);
                }
              }}
            />
          </label>
          <label>
            Club:
            <input
              type="text"
              value={player.club || ""}
              onChange={handleChange}
              name="club"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleEditSubmit(event);
                }
              }}
            />
          </label>
          <label>
            Reason Admired:
            <input
              type="text"
              value={player.reasonAdmired || ""}
              onChange={handleChange}
              required
              name="reasonAdmired"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleEditSubmit(event);
                }
              }}
            />
          </label>
        </>
      ) : (
        <>
          <h4>Name: {player.name}</h4>
          <h4>Age: {player.age}</h4>
          <h4>Club: {player.club}</h4>
          <h4>Reason Admired: {player.reasonAdmired}</h4>
        </>
      )}{" "}
    </>
  );
}
