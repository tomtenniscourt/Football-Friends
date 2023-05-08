import React, { useState, useEffect } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload/ProfilePictureUpload"
import { getOneUser} from "../../API/UserApiCalls";
import AdmiredPlayerListItem from "./AdmiredPlayerListItem";

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

  useEffect(() => {
    getOneUser(localStorage.getItem("userID")).then((output) => setUserInfo(output));
  }, []);

  useEffect(() => {
    console.log("userInfo updated", userInfo);
    if (userInfo.playersAdmired) {
      console.log("condition 1 true");
      if (userInfo.playersAdmired.length > 0) {
        console.log("condition 2 true");
      }
    }

    if (userInfo.playersAdmired && userInfo.playersAdmired.length > 0) {
      setAdmiredPlayers(
        userInfo.playersAdmired.map((player, index) => {
          return <AdmiredPlayerListItem playerInfo={player} key={player._id} />;
        })
      );
    }
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
    <div>
      <img src={imageSrc} alt="Profile" />
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
        >
          <option value="">Choose a team</option>
          <option value="Arsenal">Arsenal</option>
          <option value="Aston Villa">Aston Villa</option>
          <option value="Brentford">Brentford</option>
          <option value="Brighton &amp; Hove Albion">
            Brighton &amp; Hove Albion
          </option>
          <option value="Burnley">Burnley</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Crystal Palace">Crystal Palace</option>
          <option value="Everton">Everton</option>
          <option value="Leeds United">Leeds United</option>
          <option value="Leicester City">Leicester City</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Manchester City">Manchester City</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Newcastle United">Newcastle United</option>
          <option value="Norwich City">Norwich City</option>
          <option value="Southampton">Southampton</option>
          <option value="Tottenham Hotspur">Tottenham Hotspur</option>
        </select>
        <button type="submit">Save</button>
      </form>
      {favoriteTeam && (
        <div>
          <h4>Your favorite team is {favoriteTeam}</h4>
          <form>
            <label htmlFor="team-reason">Why do you like this team?</label>
            <textarea
              id="team-reason"
              value={favoriteTeamReason}
              onChange={handleReasonChange}
            />
          </form>
        </div>
      )}


      <div>
      <ProfilePictureUpload />
      </div>

<div>
        <h2>Admired Players</h2>
        {admiredPlayers}
</div>

    </div>

        

  );
}

export default Profile;
