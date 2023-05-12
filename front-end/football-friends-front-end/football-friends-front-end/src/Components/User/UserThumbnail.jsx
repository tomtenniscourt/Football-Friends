/**
 *  This component will NOT be a page, it will be a component which is rendered
 *  as part of the 'AllUsers' page. (It is a child of AllUsers)
 *
 *  It will be the result of a map in the 'AllUsers' component. It will take the basic
 * info from a User (e.g. name, picture, fav club) as props and render a small box
 * displaying that info
 *
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function UserThumbnail(props) {
  const { user } = props;
  return (
    <Card className="subtle-animation m-3 shadow" style={{ width: "18rem" }}>
      <Card.Body className="m-2 shadow rounded">
        <Link
          to="/ViewUser"
          className="text-decoration-none text-dark"
          state={{ id: user._id }}
        >
          <Card.Title className="mb-2">{user.profileName}</Card.Title>
          <Card.Text>Favourite Team: {user.favouriteTeam}</Card.Text>
          <Card.Text>From: {user.location}</Card.Text>
          <Card.Text>Age: {user.age}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
}
