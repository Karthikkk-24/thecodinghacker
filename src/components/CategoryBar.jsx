import { Link, BrowserRouter as Router } from "react-router-dom";
import "../../src/App.css";

export default function CategoryBar() {
  return (
    <div className="container">
      <Router>
        <Link to="" className="tabs active">
          All
        </Link>
        <Link to="" className="tabs">
          Projects
        </Link>
        <Link to="" className="tabs">
          Blogs
        </Link>
        <Link to="" className="tabs">
          Skills
        </Link>
        <Link to="" className="tabs">
          History
        </Link>
        <Link to="" className="tabs">
          Social
        </Link>
        <Link to="" className="tabs">
          LinkedIn
        </Link>
        <Link to="" className="tabs">
          About
        </Link>
        <Link to="" className="tabs">
          Contact
        </Link>
      </Router>
    </div>
  );
}
