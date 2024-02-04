import React from "react";
import { useParams } from "react-router";
import usePost from "../hooks/usePost";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  const { post } = usePost(id);

  return (
    <Card style={{ width: "50rem", margin: "auto" }}>
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Link to={"/posts"} variant="primary">
          Posts
        </Link>
      </Card.Body>
    </Card>
  );
}
