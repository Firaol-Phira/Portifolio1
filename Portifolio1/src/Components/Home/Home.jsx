import React from "react";
import "./Home.css";
import profile from "../../assets/profile.jpg";
function Home() {
  return (
    <>
      <div className="home container">
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <div className="hometop">
              <img src={profile} alt="" />
            </div>
          </div>

          <div className="homebottum">
            <div className="available-badge d-inline-flex align-items-center">
              <span className="available-dot me-2"></span>
              <span>Available for Freelance</span>
            </div>
            <h1>Hi,I'm Firaol Negewo</h1>
            <h2>Full-Stack Developer</h2>
            <p>
              I build modern and responsive websites that create clean and
              engaging digital experiences, focusing on simple, user-friendly
              interfaces while combining creativity with practical functionality
              to deliver reliable websites that work seamlessly across all
              devices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
