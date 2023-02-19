import React from "react";

export default function ShareButton() {
  return (
    <div className="sharebtn">
      <button className="share">
        LinkedIn&nbsp;
        <i className="fa-brands fa-linkedin"></i>
      </button>
      <button className="share">
        Instagram&nbsp;<i class="fa-brands fa-square-instagram"></i>
      </button>
      <button className="share">
        Twitter&nbsp;<i class="fa-brands fa-square-twitter"></i>
      </button>
    </div>
  );
}
