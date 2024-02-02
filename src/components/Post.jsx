import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Post({ id, title, body, created_at }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        {/* <Button variant="primary">View</Button> */}
        <Link to={`/posts/${id}`} variant='primary'>View</Link>
      </Card.Body>
    </Card>
  );
}
