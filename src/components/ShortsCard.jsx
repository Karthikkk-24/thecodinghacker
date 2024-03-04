import "../../src/App.css";

export default function ShortsCard(props) {
  return (
    <div className="shorts_div">
      <div className="card_img">
        <img src={props.image} alt="Card" />
        <div className="progress" style={{ display: props.exists }}>
          <div
            className="progress_bar"
            style={{ width: props.progress + "%" }}
          ></div>
        </div>
      </div>
      <div className="shorts_profile_section">
        <div className="card_profile">
          <img src="../src/assets/profile.jpg" alt="" />
        </div>
        <div className="card_info">
          <div className="card_title">
            <p>{props.title}</p>
          </div>
          <div className="card_desc">
            Karthik Shettigar ... <span>&#187;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
