import React from 'react'
import ReactDOM from 'react-dom'
import Jokes from './Jokes'

function App() {
  return(
    <div className='jokes'>
      <Jokes 
      joke={{name: "John", question: "Whats ya mothas name?", punchline: "Its ok, i don't remember eitha!"}}
      />

      <Jokes
      joke={{name: "Billy", question: "Where did motha get off to?", punchline:"Its ok, shes gotta face thats really easy to forget!"}}
      />

      <Jokes 
      joke={{name: "Jared", question: "You know why I am ya fatha?", punchline: "I dont remember that night eitha"}}
      />

    </div>
  )
}

  

export default App