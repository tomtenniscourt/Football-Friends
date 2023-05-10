/**
 * The All users component should represent a page/route in our web app
 * It should use the api to 'getAllUsers' and then render each of those users
 * as a 'UserThumbnail' component.
 *
 * This component could also incorporate the 'search' bar at the top for example
 *
 */

import { useState, useEffect } from "react";
import UserThumbnail from "./UserThumbnail";
import { getAllUsers } from "../../API/UserApiCalls";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    getAllUsers().then((output) => setUsers(output));
  }, []);

  let ourUsers = <h3>No Users</h3>;

  if (users.length > 0) {
    if (searchTerm) {
      let usersToRender = users.filter((user) => {
       return user.profileName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
      });
      
      ourUsers = usersToRender.map((user, index) => {
        return <UserThumbnail user={user} key={user._id}></UserThumbnail>});

    } else {
    ourUsers = users.map((user, index) => {
      return <UserThumbnail user={user} key={user._id}></UserThumbnail>;
    })};
  }
  return (
    <>
      <h2>All Users</h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for users"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-primary"
                type="button"
                // onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>


      {ourUsers}
    </>
  );
}
