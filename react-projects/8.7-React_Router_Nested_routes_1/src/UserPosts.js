import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));
  console.log(url);

  // How do I have this page display a specific post using postId if clicked?
  // Display <UserPost /> if there is a :postId in the url, otherwise display "No post selected..."
  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Switch>
          <Route exact path={`${url}/:postId`}>
            <ul>{postLinks}</ul>
            <UserPost posts={posts} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserPosts;
