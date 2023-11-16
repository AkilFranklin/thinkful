import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
      <Link className="btn btn-link" to='/'>Go Home</Link>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
