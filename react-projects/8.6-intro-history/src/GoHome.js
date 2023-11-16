import React from "react";
import { useNavigate, Link } from "react-router-dom";

function GoHome() {
  const history = useNavigate();
  return (
    <Link to={"/"}>Home</Link>
  );
}

export default GoHome;