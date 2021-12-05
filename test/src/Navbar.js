import { Link } from "react-router-dom";
import navbar from "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/Movies" style={{ textDecoration: "none" }}>
        Movies
      </Link>
    </div>
  );
};

export default Navbar;
