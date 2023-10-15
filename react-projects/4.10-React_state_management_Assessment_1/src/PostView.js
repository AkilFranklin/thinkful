import React from "react";

function PostView({ post, deletePost }) {
  return (
    <li className="post" style={{listStyleType: "none"}}>
      {post.type === "Text" ? (
        <p>{post.content}</p>
      ) : (
        <img src={post.content} />
      )}
      <button name="delete" onClick={deletePost}>Delete</button>
    </li>
  );
}

export default PostView;
