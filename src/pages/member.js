import React, { Component } from 'react';

var memberList = [];
if (localStorage.getItem("memberList")){
    memberList = JSON.parse(localStorage.getItem("memberList"))
}

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            username:"",
            password:""
        }
    }

    

    tableRow = () => {

        return memberList.map(element => {
            return(<tr>
                <td>{element.id}</td>
                <td>{element.username}</td>
                <td>{element.password}</td>
            </tr>)
        });
    }
    

    render() { 
        return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableRow()}
                    </tbody>
                </table>
            </div> 
        );
    }
}
 
export default Member;