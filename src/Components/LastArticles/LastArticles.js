import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

const LastArticles = () => {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          des="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />

        <div className="articles__content">
          <div className="row">
            <ArticleBox
              des="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع..."
              cover="3.jpg"
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
            />
            <ArticleBox
              des="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع..."
              cover="3.jpg"
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
            />
            <ArticleBox
              des="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه
            های مختلفی برای تسریع..."
              cover="3.jpg"
              title="نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastArticles;
