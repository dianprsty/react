import React, { Component } from 'react'

 class SelectGoldar extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: "left", marginTop: "10px" }}>
                    <label >Golongan Darah</label>
                </div>
                <select
                    name = "goldar"
                    className ="form-control"

                >
                    <option value="">--Pilih Golongan Darah--</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                </select>
            </div>
        )
    }
}


export default SelectGoldar