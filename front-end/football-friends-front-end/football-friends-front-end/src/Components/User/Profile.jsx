import React, { useState } from "react";

function Profile() {
  const [imageSrc, setImageSrc] = useState(
    "https://example.com/profile-picture.jpg"
  );
  const [username, setUsername] = useState("johndoe");
  const [name, setName] = useState("John Doe");
  const [location, setLocation] = useState("New York");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [favoriteTeamReason, setFavoriteTeamReason] = useState("");

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
          <option value="">Favourite Team</option>
          <option value="Arsenal">Arsenal</option>
          <option value="AstonVilla">Aston Villa</option>
          <option value="Bournemouth">Bournemouth</option>
          <option value="Brentford">Brentford</option>
          <option value="Brighton&HoveAlbion">Brighton</option>
          <option value="Chelsea">Chelsea</option>
          <option value="CrystalPalace">Crystal Palace</option>
          <option value="Everton">Everton</option>
          <option value="LeedsUnited">Leeds United</option>
          <option value="Fulham">Fulham</option>
          <option value="LeicesterCity">Leicester City</option>
          <option value="Liverpool">Liverpool</option>
          <option value="ManchesterCity">Manchester City</option>
          <option value="ManchesterUnited">Manchester United</option>
          <option value="NewcastleUnited">Newcaste United</option>
          <option value="NottinghamForest">Nottingham Forest</option>
          <option value="Southampton">Southampton</option>
          <option value="TottenhamHotspur">Tottenham Hotspurs</option>
          <option value="WestHamUnited">Wet Ham United</option>
          <option value="Wolves">Wolverhamton Wanderers</option>
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
    </div>
  );
}

export default Profile;
