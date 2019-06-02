import React from 'react'

function Jokes(props) {
    return (
        <div className='joke-card'>
            <h3>{props.joke.name}</h3>
            <p>{props.joke.question}</p>
            <p>{props.joke.punchline}</p>
        </div>
    )
}

export default Jokes