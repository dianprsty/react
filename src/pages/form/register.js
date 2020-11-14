import React, { Component } from 'react';
import { RowInput } from "../../component/element"


var memberList =[];
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
         }
    }
    
    setValueInput = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }


    register = () => {

      
        const {username, password} = this.state
         if (localStorage.getItem("memberList")){
            memberList = JSON.parse(localStorage.getItem("memberList"))
        }
        console.log(memberList)
        if(memberList.length === 0){
            memberList.push({username,password})
                    localStorage.setItem("memberList",JSON.stringify(memberList))
                    alert(`
                        Registrasi Berhasil
                        Username Anda ${username}
                    `)
        }else{
            // memberList.forEach(element => {
            //     console.log(element)
            //     var flag = true;
            //         if (username === element.username){
            //             flag = false;
            //         }
            //     if (flag === true){
            //         memberList.push({username,password})
            //         localStorage.setItem("memberList",JSON.stringify(memberList))
            //         alert(`
            //             Registrasi Berhasil
            //             Username Anda ${element.username}
            //         `)
            //     }else{
            //         alert(`
            //                 ${element.username} sudah ada
            //             `)
            //     }
            // });
            let flag = false;
            for (let index = 0; index < memberList.length; index++) {
                console.log(memberList[index])
                    if (username === memberList[index].username){
                        flag = true
                        break
                    }
            }
            if (flag){
                alert(
                    `Data sudah tersedia`
                )
            }else{
                memberList.push({username,password})
                localStorage.setItem("memberList",JSON.stringify(memberList))
                alert(`
                    Registrasi Berhasil
                `)
            }
        
         }


        
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
                        <button onClick={ this.register }>Register</button>
                    </div>


                </div>
            </div>
         );
    }
}
 
export default Register;