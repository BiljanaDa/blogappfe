import React, { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";
import Post from "../components/Post";
import Pagination from "../components/Pagination";
import { Container, Row } from "react-bootstrap";
import useQuery from "../hooks/useQuery";

export default function PostsPage() {
  const query = useQuery();
  const [page, setPage] = useState();

  const { posts, metadata } = usePosts(query.get("page"));

  useEffect(() => {
    setPage(query.get("page"));
  }, [query]);

  return (
    <Container>
      <Row>
        {posts?.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
              image={post.image}
            />
          );
        })}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination
          perPage={metadata.perPage}
          total={metadata.total}
          count={metadata.count}
          className="mx-auto"
        />
      </div>
    </Container>
  );
}
