import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

/** Might try and integrate this as a component within other pages e.g. 'AllUsers'
 * as opposed to having it as a stand alone page
 * Will be easier to implement as a filter search on documents which have already been
 * fetched vs doing a fetch based on the search value
 */

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/users?search=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      if (data.length === 0) {
        toast.error("No users found!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

return (
  <div className="container mt-5">
    <div
      style={{
        width: "350px",
        height: "350px",
        overflow: "hidden",
        borderRadius: "50%",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto", // Center the div horizontally
      }}
    >
      <img
        src="https://i.imgur.com/AGm0oCR.png"
        alt="your-image-description"
        className="img-fluid"
        style={{
          width: "100%",
          height: "auto",
          clipPath: "circle(38% at 50% 50%)",
        }}
      />
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <br />
        <br />
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for users"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="btn btn-dark" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {searchResults.length > 0 && (
          <ul className="list-group mt-3">
            {searchResults.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name}
              </li>
            ))}
          </ul>
        )}
        <ToastContainer />
      </div>
    </div>
  </div>
);
}

