import React from 'react'

function Jokes(props) {
    return (
        <div className='joke-card'>
            <h3 style={{backgroundColor: 'black', color: 'white'}}>{props.joke.name}</h3>
            <p style={{backgroundColor: 'red', color: 'white'}}>{props.joke.question}</p>
            <p style={{backgroundColor: 'green', color: 'yellow'}}>{props.joke.punchline}</p>
        </div>
    )
}

export default Jokes