import React from "react";
import "./PreSellCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";

const PreSellCourses = () => {
  return (
    <div className="presell">
      <div className="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          des="متن تستی برای توضیحات این بخش"
        />

        {/* <div className="presell__slider">
          <div className="swiper swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="course-box">
                  <a href="#">
                    <img
                      src="/images/courses/fareelancer.png"
                      alt="Course img"
                      className="course-box__img"
                    />
                  </a>
                  <div className="course-box__main">
                    <a href="#" className="course-box__title">
                      دوره پروژه محور متخصص جنگو
                    </a>

                    <div className="course-box__rating-teacher">
                      <div className="course-box__teacher">
                        <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" className="course-box__teacher-link">
                          رضا دولتی
                        </a>
                      </div>
                      <div className="course-box__rating">
                        <img
                          src="/images/svgs/star.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                      </div>
                    </div>

                    <div className="course-box__status">
                      <div className="course-box__users">
                        <i className="fas fa-users course-box__users-icon"></i>
                        <span className="course-box__users-text">500</span>
                      </div>
                      <span className="course-box__price">1,000,000</span>
                    </div>
                  </div>

                  <div className="course-box__footer">
                    <a href="#" className="course-box__footer-link">
                      مشاهده اطلاعات
                      <i className="fas fa-arrow-left course-box__footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="course-box">
                  <a href="#">
                    <img
                      src="/images/courses/js_project.png"
                      alt="Course img"
                      className="course-box__img"
                    />
                  </a>
                  <div className="course-box__main">
                    <a href="#" className="course-box__title">
                      دوره پروژه محور متخصص جنگو
                    </a>

                    <div className="course-box__rating-teacher">
                      <div className="course-box__teacher">
                        <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" className="course-box__teacher-link">
                          رضا دولتی
                        </a>
                      </div>
                      <div className="course-box__rating">
                        <img
                          src="/images/svgs/star.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                      </div>
                    </div>

                    <div className="course-box__status">
                      <div className="course-box__users">
                        <i className="fas fa-users course-box__users-icon"></i>
                        <span className="course-box__users-text">500</span>
                      </div>
                      <span className="course-box__price">1,000,000</span>
                    </div>
                  </div>

                  <div className="course-box__footer">
                    <a href="#" className="course-box__footer-link">
                      مشاهده اطلاعات
                      <i className="fas fa-arrow-left course-box__footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="course-box">
                  <a href="#">
                    <img
                      src="/images/courses/nodejs.png"
                      alt="Course img"
                      className="course-box__img"
                    />
                  </a>
                  <div className="course-box__main">
                    <a href="#" className="course-box__title">
                      دوره پروژه محور متخصص جنگو
                    </a>

                    <div className="course-box__rating-teacher">
                      <div className="course-box__teacher">
                        <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" className="course-box__teacher-link">
                          رضا دولتی
                        </a>
                      </div>
                      <div className="course-box__rating">
                        <img
                          src="/images/svgs/star.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                      </div>
                    </div>

                    <div className="course-box__status">
                      <div className="course-box__users">
                        <i className="fas fa-users course-box__users-icon"></i>
                        <span className="course-box__users-text">500</span>
                      </div>
                      <span className="course-box__price">1,000,000</span>
                    </div>
                  </div>

                  <div className="course-box__footer">
                    <a href="#" className="course-box__footer-link">
                      مشاهده اطلاعات
                      <i className="fas fa-arrow-left course-box__footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="course-box">
                  <a href="#">
                    <img
                      src="/images/courses/youtuber.png"
                      alt="Course img"
                      className="course-box__img"
                    />
                  </a>
                  <div className="course-box__main">
                    <a href="#" className="course-box__title">
                      دوره پروژه محور متخصص جنگو
                    </a>

                    <div className="course-box__rating-teacher">
                      <div className="course-box__teacher">
                        <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" className="course-box__teacher-link">
                          رضا دولتی
                        </a>
                      </div>
                      <div className="course-box__rating">
                        <img
                          src="/images/svgs/star.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                        <img
                          src="/images/svgs/star_fill.svg"
                          alt="rating"
                          className="course-box__star"
                        />
                      </div>
                    </div>

                    <div className="course-box__status">
                      <div className="course-box__users">
                        <i className="fas fa-users course-box__users-icon"></i>
                        <span className="course-box__users-text">500</span>
                      </div>
                      <span className="course-box__price">1,000,000</span>
                    </div>
                  </div>

                  <div className="course-box__footer">
                    <a href="#" className="course-box__footer-link">
                      مشاهده اطلاعات
                      <i className="fas fa-arrow-left course-box__footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PreSellCourses;
