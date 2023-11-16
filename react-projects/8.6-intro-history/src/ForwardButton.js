import React from "react";
import { useNavigate } from "react-router-dom";

function ForwardButton() {
  const history = useNavigate();
  return (
    <button type="button" onClick={() => history(+1)}>
      Go Forward
    </button>
  );
}

export default ForwardButton;