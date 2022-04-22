import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Logo from "../assets/tiger-logo.jpg";
import "../styles/Navbar.css";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header-css">
      <a href="/">
        <img src={Logo} alt="Logo-tiger-img" width="150px" />
      </a>
      <Navbar />
      <Searchbar />
    </div>
  );
}
