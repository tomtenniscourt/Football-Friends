import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}
