import { Link } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies">Page2</Link>
        </li>
        <li>
          <Link to="/movies">Page3</Link>
        </li>
      </ul>
    </nav>
  );
}
