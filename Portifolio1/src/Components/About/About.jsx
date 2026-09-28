import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="about container">
        <div className="row justify-content-center">
          <div className="aboutTiltle">
            <h1>About Me</h1>
          </div>

          <div className="aboutParagraph col-12 d-flex justify-content-center">
            <p>
              I’m a Full-Stack Developer. I enjoy turning ideas into modern,
              responsive, and user-friendly web experiences, combining
              thoughtful interfaces with solid functionality.
              <br />
              <br />
              My approach brings together development, UI, and design to create
              websites that are not only visually clean but also practical and
              easy to use.
              <br />
              <br />
              I’m continuously improving my skills, exploring new technologies,
              and refining my ability to transform ideas into polished digital
              products. My goal is to build simple, purposeful, and engaging
              experiences that connect good design with reliable technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
