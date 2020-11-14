import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ height: "200px",paddingTop:"60px", backgroundColor: "black", fontSize :"50px", fontWeight :"bolder", color :"gold" }}>EM System</div>
         );
    }
}
 
export default Header;