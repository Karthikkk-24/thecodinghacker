import React from "react";
import ShareButton from "./ShareButton";

export default function NameCard() {
  return (
    <div className="card">
      <div className="card_content">
        <div className="name">
          <h1>Karthik Shettigar</h1>
          <h3>Software Developer | Ethical Hacker</h3>
          <ShareButton />
        </div>
        <div className="pic">
          <img src="src/assets/My_Pic.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
