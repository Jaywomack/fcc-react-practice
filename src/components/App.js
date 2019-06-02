import React from 'react'
import Navbar from './Navbar'
import Checkbox from './Checkbox'
import MainContent from './MainContent';
import Footer from './Footer'

function App() {
  const firstName ='Jared'
  const lastName ='Womack'
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    backgroundColor: 'black'
  }

  if( hours < 12) {
    timeOfDay = 'morning'
    styles.color = 'green'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
    styles.color = 'red'
  } else{
    timeOfDay = 'night'
  }

  

  return (
    <div>
      <h1 style={styles}>Hello, {`${firstName} ${lastName}`} it is currently about {date.getHours() % 12} o'clock! Good {`${timeOfDay}`} </h1>
      <Navbar />
      <MainContent />
      <Checkbox />
      <Footer />
    </div>
  )
}

export default App


