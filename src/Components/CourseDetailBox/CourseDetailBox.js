import React from "react";
import "./CourseDetailBox.css";

const CourseDetailBox = ({ icon , title , des }) => {
  return (
    <div className="col-4">
      <div className="course-boxes__box">
        <div className="course-boxes__box-right">
          <i className={`course-boxes__box-right-icon fas fa-${icon}`}></i>
        </div>
        <div className="course-boxes__box-left">
          <span className="course-boxes__box-left-title">{title}</span>
          <span className="course-boxes__box-left--subtitle">
            {des}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailBox;
