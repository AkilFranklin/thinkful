import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const history = useNavigate();
  return (
    <button type="button" onClick={() => history(-1)}>
      Go Back
    </button>
  );
}

export default BackButton;