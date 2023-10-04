import "./App.css";

// argument is "props", has to be an object and can be used 
function NoHelloWorld({name="Default Name"}) {
  const website = "https://www.reddit.com/r/learnpython/comments/fnhja2/why_do_all_programming_languages_start_with_hello/"
  return (
  <>
  <main>
    <h1>Anythinfg other than <a href={website} target="_blank" rel="noreferrer">Hello {name}!</a></h1>
    <hr />
  </main>
  </>
  )
}

function SmallParagraph () {
  return <p>Small paragraph to do a little more</p>
}


function App() {
  return<>
  <NoHelloWorld name="Bob"/>
  <SmallParagraph />
  <NoHelloWorld name = "Jimbo"/>
  <NoHelloWorld />
  </> 
}

export default App;