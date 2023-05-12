/**
 * This component will represent a page/route in our web app. Users can navigate here
 * by clicking on an 'AdmiredPlayerListItem' component from their 'Profile' page.
 *
 * It will display all of the same info from the 'AdmiredPlayerListItem' component
 * except users will actually be able to EDIT/UPDATE the information on this page and
 * update the backend accordingly
 */

import { useState, useEffect } from "react";
import { updateAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";
import { useLocation } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "../../Styling/styles.css";


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
    if(editing){
      updateAdmiredPlayer(localStorage.getItem("userID"), player._id, player).then((result) =>
        console.log(result)
      );
    }
    setEditing(!editing);
  }

  return (
    <Container className="d-flex flex-column align-items-center mt-5 card-addAdmired">
      <Card className="p-4 w-50">
        <h1 className="text-center mb-4">Admired Players</h1>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Name:
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={player.name || ""}
                onChange={handleChange}
                required
                name="name"
                readOnly={!editing}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Age:
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="number"
                value={player.age || ""}
                onChange={handleChange}
                name="age"
                readOnly={!editing}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Club:
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={player.club || ""}
                onChange={handleChange}
                name="club"
                readOnly={!editing}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
              Reason Admired:
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                value={player.reasonAdmired || ""}
                onChange={handleChange}
                required
                name="reasonAdmired"
                readOnly={!editing}
              />
            </Col>
          </Form.Group>
        </Form>
        <button
          className={editing ? "btn btn-success" : "btn btn-dark"}
          onClick={handleEditSubmit}
        >
          {editing ? "Save" : "Edit"}
        </button>
      </Card>
    </Container>
  );
}