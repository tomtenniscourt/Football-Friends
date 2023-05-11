import React from "react";
import ReactDOM from "react-dom/client";
import "./Styling/index.css";
import App from "./Components/Central/App";
import reportWebVitals from "./Misc/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
