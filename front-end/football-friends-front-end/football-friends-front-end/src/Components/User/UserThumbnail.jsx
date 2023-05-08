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

export default function UserThumbnail(props) {
  const { user } = props;
  return (
    <div
      //Styling here is only to help check functionality, this will be replaced with bootstrap (or similar eventually)
      style={{
        height: "10vw",
        width: "10vw",
        backgroundColor: "hotpink",
        margin: "2vw",
        border: "solid black 2px",
      }}
    >
      <Link
        to="/ViewUser"
        style={{ textDecoration: "none" }} //This styling will go
        state={{ user: user }}
      >
        <div>
          <h3>This is a user thumbnail</h3>
        </div>
      </Link>
    </div>
  );
}
