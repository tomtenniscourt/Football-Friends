// AdmiredPlayerListItem.jsx

/**
 * This component will NOT be a page in our webapp. It will be rendered by either
 * the 'ViewUser' component or the 'Profile' component.
 *
 * It will take the 'Admired Player' in question as props and render a box with all the
 * info about that admired player (e.g. name, age, reason admired etc.)
 *
 * If this component is being rendered by the 'Profile' component, then it should
 * be 'clickable' by the user. It is by clicking on the admired player that a user will
 * be able to edit a player they admire. (This will navigate them to the
 * 'ViewAdmiredPlayer' component)
 */

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ViewAdmiredPlayer from "./ViewAdmiredPlayer";
import { Button } from "bootstrap";
import { deleteAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";

export default function AdmiredPlayerListItem(props) {
  //The mine prop is sent as either true or false depending on which page is rendering the component
  //If it's 'My Profile' this will be set to true so that users can click
  //on the 'AdmiredPlayerListItem' and go to 'ViewAdmiredPlayer' where they
  //will be able to edit the player.
  //If it is coming from the 'ViewUser' component, this will be set to false
  //so that users cannot click on the component, they can only view it, as you would expect
  const { mine } = props;
  const [playerInfo, setPlayerInfo] = useState(props.playerInfo);

  const itemToRender = (
    <div //Styling here is only to help check functionality, this will be replaced with bootstrap (or similar eventually)
      style={{
        height: "10vw",
        minWidth: "10vw",
        backgroundColor: "red",
        margin: "2vw",
        border: "solid black 2px",
      }}
    >
      <h3>This is an admired Player List Item</h3>
      <h4>Name: {playerInfo.name}</h4>
      <p>Reason Admired: {playerInfo.reasonAdmired}</p>
    </div>
  );
  console.log(mine);

 function handleDelete(e){
  console.log(playerInfo.name)
  props.handleDeleteAdmiredPlayer(e, playerInfo._id)
 }




  return (
    <>
      {mine ? (
        <>
        <Link to="/ViewAdmiredPlayer" state={{ playerInfo: playerInfo }}>
          {" "}
          <div>{itemToRender}</div>
        </Link>
        <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        itemToRender
      )}
    </>
  );
}
