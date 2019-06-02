import React from 'react'
import Navbar from './Navbar'
import Checkbox from './Checkbox'
import MainContent from './MainContent';
import Footer from './Footer'
import ContactCard from './ContactCard'

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
      
        <ContactCard 
        contact={{name: "girl1", imgURL: "https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', phone='123123", email:"asdfaswefwewe", hometown:"Spokane"}} />
        <ContactCard 
        contact={{name: "girl1", imgURL: "https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', phone='123123", email:"asdfaswefwewe", hometown:"Spokane"}} />
        <ContactCard 
        contact={{name: "girl1", imgURL: "https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', phone='123123", email:"asdfaswefwewe", hometown:"Spokane"}} />
        <ContactCard 
        contact={{name: "girl1", imgURL: "https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', phone='123123", email:"asdfaswefwewe", hometown:"Spokane"}} />
        
        
         
        

{/* 
        <ContactCard 
        name ='girl2' 
        imgURL='https://images.unsplash.com/photo-1515815802216-dbc1997713fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        phone='123123'
        email='asdfsdfsdf'
        />

        <ContactCard 
        name ='girl3' 
        imgURL='https://images.unsplash.com/photo-1504648177405-4dcbabb49038?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        phone='123123'
        email='asdfasdfas' 
        />

        <ContactCard 
        name ='girl4' 
        imgURL='https://images.unsplash.com/photo-1500044744318-d290fb890942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        phone='123123'
        email='asdfasdf' 
        /> */}

        {/* /* <h1 style={styles}>Hello, {`${firstName} ${lastName}`} it is currently about {date.getHours() % 12} o'clock! Good {`${timeOfDay}`} </h1>
      <Navbar />
      <MainContent />
      <Checkbox />
      <Footer /> */ }
    </div>
  )
}

export default App


