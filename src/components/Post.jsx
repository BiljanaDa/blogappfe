import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Post({ id, title, body, created_a, image }) {
  return (
    <Card
      style={{
        width: "18rem",
        maxWidth: "18rem",
        maxHeight: "300px",
        marginTop: "10px",
      }}
      className="d-flex flex-column"
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ objectFit: "cover", maxHeight: "150px" }}
      />
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{title}</Card.Title>
        <div className="flex-grow-1">
          <Card.Text>{body}</Card.Text>
        </div>
        <div className="mt-auto">
          <Link to={`/posts/${id}`} variant="primary">
            View
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
