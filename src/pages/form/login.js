import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { RowInput } from "../../component/element"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }
    }

    setValueInput = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    doLogin = () => {
        const { username, password } = this.state
        console.log(username)
        console.info(password)

        if (username === "admin" && password === "admin") {
            this.props.changeLogin(true)
        }
    }

   

    render() { 
        if (this.props.statusLogin)
            return <Redirect to="/" />
        return ( 
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "max-content" }}>                    
                    <RowInput
                        label="Username:" 
                        type="username" 
                        name="username" 
                        value={ this.state.username }
                        setValue={ (el) => this.setValueInput(el) } />     

                    <RowInput
                        label="Password:" 
                        type="password" 
                        name="password" 
                        value={ this.state.password }
                        setValue={ (el) => this.setValueInput(el) } />

                    <div style={{ marginTop: "10px" }}>
                        <button className="btn btn-primary" onClick={ this.doLogin }>Login</button>
                    </div>

                   
                </div>
            </div>
         );
    }
}
 
export default Login;