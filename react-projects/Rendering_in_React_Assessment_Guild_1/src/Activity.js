import React from "react";
import "./Activity.css";

/*
   TODO: Add the description
*/

function Activity({ time = "All Day", description = "Unknown" }) {
  return (
    <li className="activity" style={{width: "auto"}}>
      <div className="time">{time}</div>
      <div className="description">{description}</div>
    </li>
  );
}

export default Activity;
