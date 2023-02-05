import React from "react";
import "./AboutUsBox.css";

const AboutUsBox = ({ title , icon , des }) => {
  return (
    <div className="col-6">
      <div className="about-us__box">
        <div className="about-us__box-right">
          <i className={`fas fa-${icon} about-us__icon`}></i>
        </div>
        <div className="about-us__box-left">
          <span className="about-us__box-title">{title}</span>
          <span className="about-us__box-text">
            {des}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBox;
