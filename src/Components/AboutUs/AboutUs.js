import React from "react";
import "./AboutUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          des="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
        />
        <div className="container">
          <div className="row">
            <AboutUsBox
              des="با پشتیبانی و کیفیت بالا ارائه میده !"
              title="دوره های اختصاصی"
              icon="copyright"
            />
            <AboutUsBox
              des="به هر مدرسی رو نمیده. چون کیفیت براش مهمه !"
              title="اجازه تدریس"
              icon="leaf"
            />
            <AboutUsBox
              des="براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده"
              title="دوره پولی و رایگان"
              icon="gem"
            />
            <AboutUsBox
              des="اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست"
              title="اهمیت به کاربر"
              icon="crown"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
