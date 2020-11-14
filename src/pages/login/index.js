import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom"
import { setLogin } from "../../action/auth"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    setValue = (el) => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    onLogin = () => {
        const { username, password } = this.state
        console.log(username, password)

        if (username === "admin" && password === "admin")
            this.props.loginOK()
    }

    render() {
        if (this.props.statusLogin)
            {return <Redirect to="/" />}

        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <div>
                        <div>Username:</div>
                        <div>
                            <input type="text" name="username" onChange={this.setValue} />
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <div>Password:</div>
                        <div>
                            <input type="password" name="password" onChange={this.setValue} />
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <button onClick={this.onLogin}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    loginOK: () => dispatch(setLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)