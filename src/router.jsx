import React from "react";
import { Route, Routes } from "react-router";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage";

export default function router() {
  return (
    <Routes>
      <Route index path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path ='/createpost' element= {<CreatePost />} />
    </Routes>
  );
}
