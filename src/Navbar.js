import Nav from "react-bootstrap/Nav";
import React from "react";
function Navbar() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="articles">Articles</Nav.Link>
      </Nav.Item>
      <Nav.Link href="create-article">Create Articles</Nav.Link>
      <Nav.Item></Nav.Item>
    </Nav>
  );
}

export default Navbar;
