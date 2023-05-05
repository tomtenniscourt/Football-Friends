import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav style={{ fontSize: "18px" }}>
      <Link to="/" style={{ color: "darkblue" }}>
        Homepage
      </Link>
      &nbsp; | &nbsp;
      <Link to="/profile" style={{ color: "darkblue" }}>
        Profile
      </Link>
      &nbsp; | &nbsp;
      <Link to="/friends" style={{ color: "darkblue" }}>
        My Football Friends
      </Link>
      &nbsp; | &nbsp;
      <Link to="/messages" style={{ color: "darkblue" }}>
        My Messages
      </Link>
      &nbsp; | &nbsp;
      <Link to="/search" style={{ color: "darkblue" }}>
        Search
      </Link>
      &nbsp; | &nbsp;
      <Link to="/login" style={{ color: "darkblue" }}>
        Log in
      </Link>
      &nbsp; | &nbsp;
      <Link to="/register" style={{ color: "darkblue" }}>
        Register
      </Link>
    </nav>
  );
}
