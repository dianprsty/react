import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom"
import { Home, Login, AddEmployee, addDivision, Employee, Division, assignDivision } from "../../pages"
import { Menu } from "../../component/element"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employeeList:[],
            isLogin:false,
            division:""
         }
    }

    saveEmployee = (a) => {
       let empList =this.state.employeeList
       empList.push(a)

       this.setState({
           employeeList:empList
       })

    }

    changeLoginStatus = (newStatus) => {
        this.setState({
            isLogin: newStatus
        })
    }

    hideMenuLogin = () => {
        if (this.state.isLogin) {
            return (
                <div className = "navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/">
                        <Menu>Home</Menu>
                    </Link>
                    <Link to="/add-employee">
                        <Menu>Add Employee</Menu>
                    </Link>
                    <Link to="/add-division">
                        <Menu>Add Division</Menu>
                    </Link>
                    <Link to="/employee">
                        <Menu>Employee</Menu>
                    </Link>
                    <Link to="/division">
                        <Menu>Division</Menu>
                    </Link>
                    <Link to="/assign-division">
                        <Menu>Assign Division</Menu>
                    </Link>
                    <Menu triggerLogout={() => this.changeLoginStatus(false)}>Logout</Menu>
                </div>
            )
        }

        return (
            <>
                <Link to="/login">
                    <Menu>Login</Menu>
                </Link>
            </>
        )
    }


    render() { 
        return ( 
            <div>
                <div 
                    
                    //style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}
                    >
                    
                    {this.hideMenuLogin()}
                </div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/add-employee" >
                        <addEmployee  addData={this.saveEmployee} />
                    </Route> */}
                    <Route path="/add-employee" >
                        <AddEmployee addData = {(data) => this.saveEmployee(data)}/>
                    </Route>
                    <Route path="/add-division" component={addDivision} />
                    <Route path="/employee"  >
                        <Employee empData = {this.state.employeeList} />
                    </Route>
                    <Route path="/division" component={Division} />
                    <Route path="/assign-division" component={assignDivision} />
                    <Route path="/login">
                        <Login statusLogin={this.state.isLogin} changeLogin={this.changeLoginStatus} />
                    </Route>
                </Switch>
            </div>
         );
    }
}
 
export default NavBar;