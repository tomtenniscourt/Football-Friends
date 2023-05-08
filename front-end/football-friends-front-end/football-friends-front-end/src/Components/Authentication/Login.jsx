import { useState } from "react";
import { login } from "../../API/AuthenticationApiCalls";

export default function Login() {
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
    login({
      email: email,
      password: password,
    }).then((response) => {
      console.log("FROM BACKEND:   ", response);
      if (response.token) {
        localStorage.setItem("JWT", response.token);
        localStorage.setItem("userID", response.userID)
        console.log("JWT FROM LOCALSTORAGE:  ", localStorage.getItem("JWT"));
      }
    });
  };

  return (
    <>
      <h1>LOGIN PAGE</h1>
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
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
