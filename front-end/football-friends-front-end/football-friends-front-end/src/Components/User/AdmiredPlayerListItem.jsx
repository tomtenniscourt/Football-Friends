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

import { Card } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import ViewAdmiredPlayer from "./ViewAdmiredPlayer";
import { Button } from 'react-bootstrap';
import { deleteAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";

export default function AdmiredPlayerListItem(props) {
  const { handleEditAdmiredPlayer } = props;
  //The mine prop is sent as either true or false depending on which page is rendering the component
  //If it's 'My Profile' this will be set to true so that users can click
  //on the 'AdmiredPlayerListItem' and go to 'ViewAdmiredPlayer' where they
  //will be able to edit the player.
  //If it is coming from the 'ViewUser' component, this will be set to false
  //so that users cannot click on the component, they can only view it, as you would expect
  const { mine } = props;
  const [playerInfo, setPlayerInfo] = useState(props.playerInfo);

  useEffect(() => {
    setPlayerInfo(props.playerInfo);
  }, [props.playerInfo]);

  const itemToRender = (
    <Card className="mb-3" style={{ minWidth: "10rem" }}>
      <Card.Body>
        <Card.Title as="h4">Name: {playerInfo.name}</Card.Title>
        <Card.Text>Reason Admired: {playerInfo.reasonAdmired}</Card.Text>
      </Card.Body>
    </Card>
  );
  
  function handleDelete(e) {
    props.handleDeleteAdmiredPlayer(e, playerInfo._id);
  }
  
  return (
    <>
      {mine ? (
        <>
          <Link
            to="/ViewAdmiredPlayer"
            state={{
              playerInfo: playerInfo,
            }}
          >
            {" "}
            <div>{itemToRender}</div>
          </Link>
          <Button variant="danger"style={{ marginBottom: "30px" }} onClick={handleDelete}>Remove</Button>
        </>
      ) : (
        itemToRender
      )}
    </>
  );
}
