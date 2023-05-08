import { useState } from "react";
import { createUser } from "../../API/AuthenticationApiCalls";

export default function Register() {
  /** Jack to play with this component while working out authentication side of things */

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    createUser({
      email: email,
      password: password,
    }).then((result) => {
      console.log("FROM BACKEND:   ", result);
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registerPage">
      <h1>Register</h1>
      <div className="registerForm">
        <h2>Enter your details below and become a fooball friend!</h2>
        <input
          className="inputNewUsername"
          type="text"
          placeholder="Chosen Username"
        />
        <br />
        <input
          className="inputNewPassword"
          type="text"
          placeholder="Password"
          value={password}

        />
        <br />{" "}
        <input
          className="inputNewPasswordAgain"
          type="text"
          placeholder="Confirm Password"
          value={password}
        />
        <br />
        <label>
        <input type="text" placeholder="Your Email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <select
          className="dropdown"
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
        <input
          className="inputNewUsername"
          type="text"
          placeholder="Location Details"
        />
        <br />
        <button className="registerButton">Submit</button>
      </div>
    </div>
  );}