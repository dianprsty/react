import React, { Component } from 'react';
import { RowInput } from "../../component/element"
import SelectGoldar from '../../component/element/select';

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama:"",
            nik:"",
            tempatLahir:"",
            tanggalLahir:"",
            goldar:"",
            jenisKelamin:"",
            alamat:"",
            divisi:"",
            empData : {},
            redirect : false

         }
    }

    setValueInput = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }


    saveReg = () => {
        // const {nama, nik, tempatLahir, tanggalLahir, goldar, jenisKelamin, alamat}=this.state
        // await this.setState({
        //     empData : {nama, nik, tempatLahir, tanggalLahir, goldar, jenisKelamin, alamat}
        // })
        this.props.addData(this.state)
    }

    render() { 
        return (
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "max-content" }}>                    
                    <RowInput
                        label="Nama:" 
                        type="text" 
                        name="nama" 
                        value={ this.state.nama }
                        setValue={ (el) => this.setValueInput(el) } />     

                    <RowInput
                        label="NIK:" 
                        type="text" 
                        name="nik" 
                        value={ this.state.nik }
                        setValue={ (el) => this.setValueInput(el) } />
                    
                    <RowInput
                        label="Tempat Lahir:" 
                        type="text" 
                        name="tempatLahir" 
                        value={ this.state.tempatLahir}
                        setValue={ (el) => this.setValueInput(el) } />

                    <RowInput
                        label="Tanggal Lahir:" 
                        type="date" 
                        name="tanggalLahir" 
                        value={ this.state.tanggalLahir }
                        setValue={ (el) => this.setValueInput(el) } />
                        
                    {/* <RowInput
                        label="Golongan Darah:" 
                        type="text" 
                        name="goldar" 
                        value={ this.state.goldar }
                        setValue={ (el) => this.setValueInput(el) } /> */}
                    <SelectGoldar 
                        name="goldar"
                        setValue={ (el) => this.setValueInput(el) }
                        />

                    {/* <div>
                        <div style={{ textAlign: "left", marginTop: "10px" }}>
                            <label >Golongan Darah</label>
                        </div>
                        <select
                            name = "goldar"
                            className ="form-control"
                            setValue={ (el) => this.setValueInput(el)}
                        >
                            <option value="">--Pilih Golongan Darah--</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                        </select>
                    </div> */}
                        
                    <RowInput
                        label="Jenis Kelamin:" 
                        type="text" 
                        name="jenisKelamin" 
                        value={ this.state.jenisKelamin }
                        setValue={ (el) => this.setValueInput(el) } />
                        
                    <RowInput
                        label="Alamat:" 
                        type="textarea" 
                        name="alamat" 
                        value={ this.state.alamat }
                        setValue={ (el) => this.setValueInput(el) } />

                    <div style={{ marginTop: "10px" }}>
                        <button className="btn btn-primary"  onClick={this.saveReg}>Add Employee</button>
                    </div>


                </div>
            </div>
         );
    }
}
 
export default AddEmployee