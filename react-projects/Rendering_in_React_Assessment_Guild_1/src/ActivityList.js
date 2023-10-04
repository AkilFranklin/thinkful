import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

/*
TODO: Complete ActivityList
TIP: Use the map higher order function:
    {activities.map((activity, index) => (
       <Activity key={index} {...activity} />
    ))}
*/

function ActivityList({ activities = [] }) {
  const temp = activities.map((activity, index) => (
    <Activity key={index} {...activity} />
  ));
  console.log(temp);
  if (activities && activities.length) {
    return (
      <span>
      <ul className="activity-list" style={{border: "solid", borderWidth:2, width: 100}}>
        {activities.map((activity, index) => (
          <Activity key={index} {...activity} />
        ))}
      </ul>
      </span>
      
    );
  }
  return null;
}

export default ActivityList;
