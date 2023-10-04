import React from "react";

function Content({ loggedIn, fontSize }) {
  console.log(fontSize);
  return loggedIn && <p style={{fontSize}}>CONTENT</p>;
}

export default Content;
