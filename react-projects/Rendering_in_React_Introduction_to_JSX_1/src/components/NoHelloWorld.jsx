
import React from "react";

// argument is "props", has to be an object and can be used 
function NoHelloWorld({name="Default Name"}) {
    const website = "https://www.reddit.com/r/learnpython/comments/fnhja2/why_do_all_programming_languages_start_with_hello/"
    return (
    <>
      <h1>Anythinfg other than <a href={website} target="_blank" rel="noreferrer">Hello {name}!</a></h1>
      <hr />
    </>
    )
  }

  export default NoHelloWorld;