import React, { Component } from 'react'

class Division extends Component {
    constructor(props){
        super(props);
        this.state={
            divisi:""
        }
    }
    render() {
        return (
            <div>
                <table>
                    <th>
                        <td>ID Divisi</td>
                        <td>Nama Divisi</td>
                    </th>
                </table>
            </div>
        )
    }
}

export default Division