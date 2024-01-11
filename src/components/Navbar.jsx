import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="main_container">
        <div className="section section1">
            <img src="./images/logo/Icon 1.png" alt="" />
        </div>
        <div className="section section2">
            <span>
                <a href="">Home</a>
            </span>
            <span>
                <a href="">About</a>
            </span>
            <span>
                <a href="">Blogs</a>
            </span>
            <span>
                <a href="">Contact Us</a>
            </span>
        </div>
      </div>
    </>
  );
}
