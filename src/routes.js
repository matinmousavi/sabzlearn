import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:courseName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
];

export default routes;
