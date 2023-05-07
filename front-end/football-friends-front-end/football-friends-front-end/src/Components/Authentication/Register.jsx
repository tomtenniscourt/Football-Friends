import { useState } from "react";
import { createUser } from "../../API/AuthenticationApiCalls";

export default function Register() {
  /** Jack to play with this component while working out authentication side of things */

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
    <>
      <h1>REGISTER PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
