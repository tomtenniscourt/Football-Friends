import { Link } from "react-router-dom";

export default function NavBar() {
  /** Could do with some styling */

  return (
    <nav style={{ fontSize: "18px" }}>
      <Link to="/" style={{ color: "darkblue" }}>
        Homepage
      </Link>
      &nbsp; | &nbsp;
      <Link to="/profile" style={{ color: "darkblue" }}>
        My Profile
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
        Log in/out
      </Link>
      &nbsp; | &nbsp;
      <Link to="/register" style={{ color: "darkblue" }}>
        Register
      </Link>
    </nav>
  );
}
