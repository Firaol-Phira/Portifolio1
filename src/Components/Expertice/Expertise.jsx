import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section className="expertise container">
      <div className="expertise-container row">
        <p className="expertise-title">EXPERTISE IN</p>

        <div className="expertise-icons">
          <div className="expertise-item">
            <i className="devicon-react-original"></i>
          </div>

          <div className="expertise-item">
            <i className="devicon-bootstrap-plain"></i>
          </div>

          <div className="expertise-item">
            <i className="devicon-nodejs-plain"></i>
          </div>

          <div className="expertise-item">
            <i className="devicon-express-original"></i>
          </div>

          <div className="expertise-item">
            <i className="bi bi-database"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
