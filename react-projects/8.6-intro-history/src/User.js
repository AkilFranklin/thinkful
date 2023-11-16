import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "../../8.7-intro-nested-routes/src/UserProfile";
import PostList from "../../8.7-intro-nested-routes/src/PostList";

function User() {
  return (
    <Routes>
      <Route path={"/users/:userId/posts"}>
        <PostList />
      </Route>
      <Route path={"/users/:userId"}>
        <UserProfile />
      </Route>
    </Routes>
  );
};

export default User;