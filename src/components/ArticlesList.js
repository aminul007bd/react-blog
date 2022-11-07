import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";

function ArticlesList({ articles }) {
  return (
    <>
      {articles.map((article, name) => {
        return (
          <Card className="mb-2" key={name}>
            <Card.Body>
              <Card.Title>{article.name}</Card.Title>
              <Card.Text>{article.title}</Card.Text>
              <p>{article.content[0].substring(0, 120)}...</p>
              <Button
                as={Link}
                to={`/articles/${article.name}`}
                size="sm"
                variant="link"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default ArticlesList;
