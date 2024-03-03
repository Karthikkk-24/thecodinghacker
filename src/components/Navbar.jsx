import "../../src/App.css";

export default function App() {
  return (
    <div className="navbar">
      <div className="navbar_1">
        <div className="hamburger_menu">
          <div className="hamburger_icon">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio_icon">
            <i className="fa-brands fa-youtube"></i>
          </div>
          <p>Youtube</p>
        </div>
      </div>
      <div className="navbar_2">
        <div className="search_bar">
          <input className="search_input" placeholder="Search" />
          <div className="search_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="microphone">
          <div className="microphone_icon">
            <i className="fa-solid fa-microphone"></i>
          </div>
        </div>
      </div>
      <div className="navbar_3">
        <div className="video">
          <div className="video_icon">
            <i className="fa-solid fa-video"></i>
          </div>
        </div>
        <div className="bell">
          <div className="bell_icon">
            <i className="fa-solid fa-bell"></i>
          </div>
        </div>
        <div className="profile">
          <div className="profile_icon">
            <img src="src/assets/profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
