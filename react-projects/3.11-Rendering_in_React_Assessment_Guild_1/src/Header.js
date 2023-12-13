import React from "react";
import "./Header.css";

/*
  TODO: Complete the header
*/

function Header({name="Unknown Name",birthday="Unknown birthday",imageSrc="",}) {
  return (
    <header>
    <span>
      <div style={{display: "inline-block"}}>
        <img src={imageSrc} alt="Kitten" style={{height:400}}/>
      </div>
      <div style={{display: "inline-block", marginRight:10, verticalAlign: "top"}}>
          <h1>{name}</h1>
          <h2 style={{}}>Birthday: {birthday}</h2>
      </div>
    </span>
    
    </header>
  );
}

export default Header;
