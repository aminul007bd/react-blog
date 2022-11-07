import ArticlesList from "../components/ArticlesList";
import React from "react";
import articles from "../article-content";

function ArticlesListPage() {
  return (
    <>
      <h1> Articles </h1>
      <ArticlesList articles={articles} />
    </>
  );
}

export default ArticlesListPage;
