import React from "react";
import { useLocation } from "react-router-dom";

function NoMatch() {
  const location = useLocation();
  return (
    <h3>
      Unable to create a new user
    </h3>
  )
  
}

export default NoMatch;
