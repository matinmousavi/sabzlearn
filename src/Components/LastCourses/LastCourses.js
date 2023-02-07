import React from "react";
import "./LastCourses.css";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

const LastCourses = () => {
  return (
    <div className="courses">
      <div className="container">
        <SectionHeader
          des="سکوی پرتاپ شما به سمت موفقیت"
          title="جدیدترین دوره ها"
          btnTitle="تمامی دوره ها"
          btnHref='/courses'
        />
        <div className="courses-content">
          <div className="container">
            <div className="row">
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCourses;
