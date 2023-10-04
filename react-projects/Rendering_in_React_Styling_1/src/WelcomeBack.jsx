import React from "react";
// WelcomeBack.js
function WelcomeBack({ name = "valued customer" }) {
    const pStyle = {
      color: "black",
      fontFamily: "Zen Dots, cursive",
    };
    const userName = {
      padding: "2px 4px",
      marginRight: "2px",
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "4px",
    };
  
    return (
      <p style={pStyle}>
        Welcome back, {name}!
      </p>
    );
  }
  
  export default WelcomeBack;