import React, { Component } from 'react'
//import Tabel from '../kendaraan/kendaraan'


var kendaraanList = [];
if (localStorage.getItem("kendaraanList")){
    kendaraanList = JSON.parse(localStorage.getItem("kendaraanList"))
}
class OperatorMotor extends Component{
    render(){
        return(
            <>
                <form>
                    <div class="form-group row">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">ID</label>
                        <div class="col-sm-3">
                        <input name="idparkir"  class="form-control" id="colFormLabel" placeholder="ID Parkir"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="colFormLabel" class="col-sm-2 col-form-label">Nopol</label>
                        <div class="col-sm-3">
                        <input name="platno"  class="form-control" id="colFormLabel" placeholder="No Polisi"/>
                        </div>
                    </div>
                    <div class="form-group">
                            <div class="col-sm-3">
                            <button type="submit" class="btn btn-primary" onClick={passData}>Keluar Parkir</button>
                            </div>
                    </div>
                </form>
                <table border="1" cellpadding="10px" width="100%">
                    <thead>
                        <tr>
                            <th width="70"px>No</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </>
        )
    }
}

console.log(kendaraanList);
const getData = (a) => {
    return document.querySelector(a)
}

const passData = () => {
    const idParkir = getData("input[name=idparkir]").value;
    const platNo = getData("input[name=platno]").value;
    parkOut(idParkir,platNo);
}
const parkOut = (idParkir,platNo) => {
    var date = new Date();
    kendaraanList.map(element => {
        if (element.idParkir == idParkir){
            element.platNo = platNo;
            element.status = "keluar";
            element.tipe = "motor";
            element.timeout = date.getUTCMinutes()
        }
    });
    localStorage.setItem("kendaraanList",JSON.stringify(kendaraanList))
}

export default OperatorMotor;