import { Link, BrowserRouter as Router } from "react-router-dom";
import "../../src/App.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Router>
        <div className="container">
          <Link to="" className="items active">
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-solid fa-list-check"></i>
            <p>Projects</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-solid fa-bars-progress"></i>
            <p>Skills</p>
          </Link>
        </div>
        <div className="line"></div>
        <div className="container">
          <Link to="" className="items">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <p>History</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-solid fa-list-check"></i>
            <p>Projects</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-solid fa-bars-progress"></i>
            <p>Skills</p>
          </Link>
        </div>
        <div className="line"></div>
        <div className="container">
          <div className="heading">Projects</div>
          <Link to="" className="items">
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-solid fa-list-check"></i>
            <p>Projects</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-regular fa-address-card"></i>
            <p>About</p>
          </Link>
        </div>
        <div className="line"></div>
        <div className="container">
          <div className="heading">Social</div>
          <Link to="" className="items">
            <i className="fa-brands fa-linkedin"></i>
            <p>Linkedin</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-brands fa-medium"></i>
            <p>Medium</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-brands fa-x-twitter"></i>
            <p>X</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-brands fa-linkedin"></i>
            <p>Linkedin</p>
          </Link>
          <Link to="" className="items">
            <i className="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </Link>
        </div>
      </Router>
    </div>
  );
}
