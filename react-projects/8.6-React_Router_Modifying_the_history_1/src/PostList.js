import React from "react"; 
import { Route, Switch, useRouteMatch } from "react-router-dom"; 

function PostList() { 
  return ( 
      <Switch> 
        <Route exact path={"/users/:userId/posts"}> 
          <p>Here are a list of the user’s posts</p> 
        </Route> 
        <Route path={"/users/:userId/posts/:postId"}> 
          <p>Here is a single post</p> 
        </Route> 
      </Switch> 
  ); 
} 

export default PostList;