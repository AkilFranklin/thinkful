import React from "react";

function Clock() {

  let hours = new Date().getHours();
  switch(true) {
    case (hours < 12):
      return <p>Good Morning!</p>;
    case (12 <= hours && hours <= 18):
      return <p>Good Afternoon!</p>;
    case (hours > 18):
      return <p>Good Evening!</p>;
  }
}

export default Clock;
