import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Post({ id, title, body, created_a, image }) {
  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        {/* <Button variant="primary">View</Button> */}
        <Link to={`/posts/${id}`} variant="primary">
          View
        </Link>
      </Card.Body>
    </Card>
  );
}
