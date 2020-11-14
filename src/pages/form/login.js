import React, { Component } from 'react';
import { RowInput } from "../../component/element"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            isLogin: false
         }
    }

    setValueInput = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    doLogin = () => {
        var memberList = [];
        if (localStorage.getItem("memberList")){
            memberList = JSON.parse(localStorage.getItem("memberList"))
        }
        const { username, password } = this.state
        console.log(username)
        console.info(password)
        memberList.forEach(element => {
          
            if (username === element.username && password === element.password) {
                this.setState({
                    isLogin: true
                })
                alert(`Selamat datang ${element.username}`)
                
            }
            
            
        });
        
    }
    render() { 
        return ( 
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "max-content" }}>                    
                    <RowInput
                        label="Username:" 
                        type="text" 
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
                        <button onClick={ this.doLogin }>Login</button>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Login;