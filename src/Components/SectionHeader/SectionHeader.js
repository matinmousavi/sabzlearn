import React from "react";
import "./SectionHeader.css";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, des, btnTitle, btnHref }) => {
  return (
    <div className="courses-header">
      <div className="courses-header__right">
        <span className="courses-header__title title">{title}</span>
        <span className="courses-header__text">{des}</span>
      </div>
      {btnTitle && (
        <div className="courses-header__left">
          <Link to={btnHref} className="courses-header__link">
            {btnTitle}
            <i className="fas fa-arrow-left courses-header__icon"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
