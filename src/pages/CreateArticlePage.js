import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";

function CreateArticlePage() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Content goes here"
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Button variant="primary">Submit</Button>
    </Form>
  );
}

export default CreateArticlePage;
