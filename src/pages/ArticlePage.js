import React, { useState } from "react";

import NotfoundPage from "./NotfoundPage";
import articles from "../article-content";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotfoundPage />;
  }
  return (
    <div className="row" key={article.name}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticlePage;
