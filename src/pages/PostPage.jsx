import React from "react";
import { useParams } from "react-router";
import usePost from "../hooks/usePost";

export default function PostPage () {
    const {id} = useParams();
    const {post} = usePost(id);

    return (
        <div>{post.title}</div>
    )
}