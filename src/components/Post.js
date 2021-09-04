import React from "react";

const Post = ({ loading, post }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {post.map((el) => {
        return <li key={el.id}>{el.title}</li>;
      })}
    </ul>
  );
};

export default Post;
