import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import { Button } from "react-bootstrap";
import CreateArticlePage from "./pages/CreateArticlePage";
import HomePage from "./pages/HomePage";
import Navbar from "./Navbar";
import NotfoundPage from "./pages/NotfoundPage";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="create-article" element={<CreateArticlePage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
