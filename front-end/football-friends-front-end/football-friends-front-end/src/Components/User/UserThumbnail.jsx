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
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Body>
        <Link
          to="/ViewUser"
          className="text-decoration-none text-dark"
          state={{ id: user._id }}
        >
          <Card.Title>This is a user thumbnail</Card.Title>
          <Card.Subtitle className="mb-2">{user.profileName}</Card.Subtitle>
          <Card.Text>{user.email}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
}
