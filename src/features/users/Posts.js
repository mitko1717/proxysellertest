import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./slice";

const Posts = () => {
  const { posts } = useSelector((state) => state.fetch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};

export default Posts;
