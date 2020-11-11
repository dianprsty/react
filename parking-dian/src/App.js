import React, { Component } from 'react';
import Home from './home/home';
import ParkIn from './park-in/park-in';
import './nav.css';

import { BrowserRouter as Router,Route,Link } from "react-router-dom";

class App extends Component {


  render() { 
    return (
      <Router>
        <ul className="navbar navbar-expand-lg navbar-light bg-light">
          <li>
            <Link className="nav-link" to="/parkin">Masuk Parkir</Link>
          </li>
          <li>
            <Link className="nav-link" to="/home">Manage Parkir</Link>
          </li>
        </ul>
        
        
        
        <Route path="/parkin" component={ParkIn}/>
        <Route path="/home" component={Home}/>
      </Router>

    )
  }
}
 
export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
