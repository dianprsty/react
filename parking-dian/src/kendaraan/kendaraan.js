import React, { Component } from 'react'
import Row from './row'



class Tabel extends Component{
    render(){
        return(
            <>
                <table border="1" cellpadding="10px" width="100%">
                    <thead>
                        <tr>
                            <th width="70"px>No</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                        </tr>
                    </thead>
                </table>
                <Row />
            </>
        );
    }
}


export default Tabel;