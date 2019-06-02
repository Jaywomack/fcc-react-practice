import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// function MyApp() { //functional component that returns the JSX below. Which is rendered below by the ReactDOM.render() method
//     return (
//     <ul>
//        <li>asdf</li> 
//        <li>sadf</li>
//        <li>asdf</li>
//     </ul>
//         ) //The li's above would not work without the ul because only one jsx element can be rendered to the dom at a time
    
// }

// ReactDOM.render(
//     <MyApp />, //Self closing tag
//     document.getElementById('root') //selects the node that will be rendered to.
// )

// ReactDOM.render(
//     <ul>
//       <li>asdf</li>
//       <li>sadf</li>
//       <li>asdf</li>
//     </ul>,
//     document.getElementById('root')
//   )

//   ReactDOM.render(
//       <div>
//           <ul>
//               <li>1</li>
//               <li>2</li>
//               <li>3</li>
//               <li>4</li>
//               <li>5</li>
//           </ul>
//       </div>,
//       document.getElementById('root')
//   )


function MyInfo() {
   return( <div>
       <h1>Jared Womack</h1>
        <p>I am supreme overlord of the universe</p>
        <ul>
            <li>Lisbon, Portugal</li>
            <li>Barcelona, Spain</li>
            <li>Nice, France</li>
        </ul>
    </div>
   )
}

ReactDOM.render(
    <MyInfo />,
    document.getElementById('root')
)