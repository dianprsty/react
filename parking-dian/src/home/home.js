import React, {Component} from 'react';
import Login from '../login/login';
import Admin from '../admin/admin';
import OperatorMobil from '../operator/operator-mobil';
import OperatorMotor from '../operator/operator-motor';
//import ParkIn from '../park-in/park-in';

import { BrowserRouter as Router,Route,Link } from "react-router-dom";

class Home  extends Component {
    
    render() { 
        return (
            <Router>
        <ul className="navbar navbar-expand-lg navbar-light bg-light">
            <li>
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li>
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
          <li>
            <Link className="nav-link" to="/motor">Operator Motor</Link>
          </li>
          <li>
            <Link className="nav-link" to="/mobil">Operator Mobil</Link>
          </li>
        </ul>
        
        
        
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/mobil" component={OperatorMobil}/>
        <Route path="/motor" component={OperatorMotor}/>
      </Router>
         );
    }
}
 
export default Home ;
