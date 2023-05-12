import React, { useState, useEffect } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload/ProfilePictureUpload"
import { getOneUser} from "../../API/UserApiCalls";
import AdmiredPlayerListItem from "./AdmiredPlayerListItem";
import { createAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";
import { deleteAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";

function Profile() {
   const [userInfo, setUserInfo] = useState({});
   const [admiredPlayers, setAdmiredPlayers] = useState(<h4>No Admired Players</h4>)
   const [imageSrc, setImageSrc] = useState(
    "https://example.com/profile-picture.jpg"
  );

  const [username, setUsername] = useState("johndoe");
  const [name, setName] = useState("John Doe");
  const [location, setLocation] = useState("New York");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [favoriteTeamReason, setFavoriteTeamReason] = useState("");
  const [newAdmiredPlayer, setNewAdmiredPlayer] = useState({
    name: '',
    age: '',
    club: '',
    reasonAdmired: ''
  });
  
  const addAdmiredPlayer = (event) => {
    event.preventDefault();
    createAdmiredPlayer(localStorage.getItem("userID"),newAdmiredPlayer)
    .then(output => setUserInfo (output))
    .catch((error) => console.log (error))
    setNewAdmiredPlayer({
      name: '',
      age: '',
      club: '',
      reasonAdmired: ''
    });
  };

  function handleDeleteAdmiredPlayer(e, playerID){
    e.preventDefault();
    deleteAdmiredPlayer(localStorage.getItem("userID"), playerID)
    .then(() => getOneUser(localStorage.getItem("userID")).then((output) => setUserInfo(output)));
    // .then(() => userInfo.playersAdmired.filter(player => player._id !== playerID))
    // .then(output => {setUserInfo({...userInfo, playersAdmired: output}); console.log(userInfo)})
  }


  useEffect(() => {
    getOneUser(localStorage.getItem("userID")).then((output) => setUserInfo(output));
  }, []);
  useEffect(() => {
    if (userInfo.playersAdmired) {
    if (userInfo.playersAdmired.length > 0) {
      }
    } console.log(userInfo.playersAdmired)

    if (userInfo.playersAdmired && userInfo.playersAdmired.length > 0) {
        setAdmiredPlayers(
          userInfo.playersAdmired.map((player, index) => {
            return <AdmiredPlayerListItem handleDeleteAdmiredPlayer={handleDeleteAdmiredPlayer} playerInfo={player} key={index} mine={true} />;
          })
        );
      }
      else {setAdmiredPlayers(<h4>No Admired Players</h4>)}
    }, [userInfo]);

  const handleTeamSelect = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setFavoriteTeam(selectedTeam);
    setSelectedTeam("");
  };
  
  const handleReasonChange = (event) => {
    setFavoriteTeamReason(event.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={imageSrc} alt="Profile" className="img-fluid rounded-circle" />

      <div>
      <ProfilePictureUpload />
      </div>

      <h2>{username}</h2>
      <p>{name}</p>
      <p>{location}</p>
      <h3>Add a Favorite Team</h3>
      <form onSubmit={handleSave}>
        <label htmlFor="team-select"></label>
        <select
          id="team-select"
          value={selectedTeam}
          onChange={handleTeamSelect}
          className="form-control"
        >
          <option value="">Choose a team</option>
          <option value="Arsenal">Arsenal</option>
          <option value="Aston Villa">Aston Villa</option>
          <option value="Bournemouth">Bournemouth</option>
          <option value="Brentford">Brentford</option>
          <option value="Brighton & Hove Albion">Brighton & Hove Albion</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Crystal Palace">Crystal Palace</option>
          <option value="Everton">Everton</option>
          <option value="Fulham">Fulham</option>
          <option value="Leeds United">Leeds United</option>
          <option value="Leicester City">Leicester City</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Manchester City">Manchester City</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Newcastle United">Newcastle United</option>
          <option value="Nottingham Forest">Nottingham Forest</option>
          <option value="Southampton">Southampton</option>
          <option value="Tottenham Hotspur">Tottenham Hotspur</option>
          <option value="Wolverhampton Wanderers">Wolverhampton Wanderers</option>

        </select>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>

      {favoriteTeam && (
        <div>
          <h4>Your favorite team is {favoriteTeam}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="team-reason">
                Why do you like this team?
              </label>
              <textarea
                id="team-reason"
                value={favoriteTeamReason}
                onChange={handleReasonChange}
                className="form-control"
              />
            </div>
          </form>
        </div>
      )}

      <div className="card my-4">
        <div className="card-body">
          <h3>Add Admired Player</h3>
          <form onSubmit={addAdmiredPlayer}>
            <div className="form-group">
              <label htmlFor="player-name">Player Name:</label>
              <input
                type="text"
                id="player-name"
                value={newAdmiredPlayer.name}
                onChange={(e) =>
                  setNewAdmiredPlayer({
                    ...newAdmiredPlayer,
                    name: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="player-age">Player Age:</label>
              <input
                type="text"
                id="player-age"
                value={newAdmiredPlayer.age}
                onChange={(e) =>
                  setNewAdmiredPlayer({
                    ...newAdmiredPlayer,
                    age: e.target.value,
		})
                }
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="player-club">Player Club:</label>
              <input
                type="text"
                id="player-club"
                value={newAdmiredPlayer.club}
                onChange={(e) =>
                  setNewAdmiredPlayer({
                    ...newAdmiredPlayer,
                    club: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="player-reason">Reason Admired:</label>
              <input
                type="text"
                id="player-reason"
                value={newAdmiredPlayer.reasonAdmired}
                onChange={(e) =>
                  setNewAdmiredPlayer({
                    ...newAdmiredPlayer,
                    reasonAdmired: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Player
            </button>
          </form>
        </div>
      </div>

      <div className="card my-4">
        <div className="card-body">
          <h2>Admired Players</h2>
          {admiredPlayers}
        </div>
      </div>
    </div>
  </div>
</div>
  );
 }
 export default Profile;