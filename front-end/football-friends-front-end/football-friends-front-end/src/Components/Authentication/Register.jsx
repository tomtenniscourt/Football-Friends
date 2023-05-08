import { useState } from "react";
import { createUser } from "../../API/AuthenticationApiCalls";

export default function Register() {
  /** Jack to play with this component while working out authentication side of things */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleOptionChange = (event) => setSelectedOption(event.target.value);
  const handleLocationChange = (event) => setSelectedLocation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Username:", username);
    createUser({
      email: email,
      password: password,
      username: username,
      confirmPassword: confirmPassword
    }).then((result) => {
      console.log("FROM BACKEND:   ", result);
    });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
  };


  return (
    <div className="registerPage">
      <h1>Register</h1>
      <div className="registerForm">
        <h2>Enter your details below and become a fooball friend!</h2>
               <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </label>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />      
        <select
          className="dropdownTeam"
          value={selectedOption}
          onChange={handleOptionChange}
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
        <br />
        <select className="dropdownCounty" value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Select a county</option>
        <option value="Avon">Avon</option>
        <option value="Bedfordshire">Bedfordshire</option>
        <option value="Berkshire">Berkshire</option>
        <option value="Bristol">Bristol</option>
        <option value="Buckinghamshire">Buckinghamshire</option>
        <option value="Cambridgeshire">Cambridgeshire</option>
        <option value="Cheshire">Cheshire</option>
        <option value="Cleveland">Cleveland</option>
        <option value="Cornwall">Cornwall</option>
        <option value="Cumbria">Cumbria</option>
        <option value="Derbyshire">Derbyshire</option>
        <option value="Devon">Devon</option>
        <option value="Dorset">Dorset</option>
        <option value="Durham">Durham</option>
        <option value="East Sussex">East Sussex</option>
        <option value="Essex">Essex</option>
        <option value="Gloucestershire">Gloucestershire</option>
        <option value="Greater London">Greater London</option>
        <option value="Greater Manchester">Greater Manchester</option>
        <option value="Hampshire">Hampshire</option>
        <option value="Hereford and Worcester">Hereford and Worcester</option>
        <option value="Hertfordshire">Hertfordshire</option>
        <option value="Humberside">Humberside</option>
        <option value="Isle of Wight">Isle of Wight</option>
        <option value="Kent">Kent</option>
        <option value="Lancashire">Lancashire</option>
        <option value="Leicestershire">Leicestershire</option>
        <option value="Lincolnshire">Lincolnshire</option>
        <option value="Merseyside">Merseyside</option>
        <option value="Norfolk">Norfolk</option>
        <option value="North Yorkshire">North Yorkshire</option>
        <option value="Northamptonshire">Northamptonshire</option>
        <option value="Northumberland">Northumberland</option>
        <option value="Nottinghamshire">Nottinghamshire</option>
        <option value="Oxfordshire">Oxfordshire</option>
        <option value="Shropshire">Shropshire</option>
        <option value="Somerset">Somerset</option>
        <option value="South Yorkshire">South Yorkshire</option>
        <option value="Staffordshire">Staffordshire</option>
        <option value="Suffolk">Suffolk</option>
        <option value="Surrey">Surrey</option>
        <option value="Tyne and Wear">Tyne and Wear</option>
        <option value="Warwickshire">Warwickshire</option>
        <option value="West Midlands">West Midlands</option>
        <option value="West Sussex">West Sussex</option>
        <option value="West Yorkshire">West Yorkshire</option>
        <option value="Wiltshire">Wiltshire</option>
        </select>

        <button className="registerButton" type="submit">Submit</button> 
        </form>
      </div>
    </div>
  );}