import React, { Component } from 'react'

class Employee extends Component {
    constructor(props){
        super(props);
        this.state={
            nama:"",
            nik:"",
            tempatLahir:"",
            tanggalLahir:"",
            goldar:"",
            jenisKelamin:"",
            alamat:"",
            divisi:"",
            employeeList :[]
        }
    }

    addEmpToList = () => {
        this.setState({
            employeeList: this.props.empData
        })
    }

    addRow = () =>{
        this.state.employeeList.forEach(data => {
        return <tr>{data.nama}</tr>
            
        });
    }

    render() {
        return (
            <div>
                {/* <table>
                    <th>
                        <td>ID Karyawan</td>
                        <td>Nama</td>
                        <td>Nik</td>
                        <td>Tempat Lahir</td>
                        <td>Tanggal Lahir</td>
                        <td>Golongan Darah</td>
                        <td>Jenis Kelamin</td>
                        <td>Alamat</td>
                        <td>Divis</td>
                    </th>
                    {this.addRow}
                </table> */}
                <table style={{ width: "100%" }} cellPadding="10px" border="1">
                    <thead>
                        <tr>
                            <th style={{ width: "50px" }}>No</th>
                            <th>Nama</th>
                            <th>Nik</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Golongan Darah</th>
                            <th>Jenis Kelamin</th>
                            <th>Alamat</th>
                            <th>Divis</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.empData.map((val, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{val.nama}</td>
                                            <td>{val.nik}</td>
                                            <td>{val.tempatLahir}</td>
                                            <td>{val.tanggalLahir}</td>
                                            <td>{val.goldar}</td>
                                            <td>{val.jenisKelamin}</td>
                                            <td>{val.alamat}</td>
                                        </tr>
                                    )
                                }) 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Employee