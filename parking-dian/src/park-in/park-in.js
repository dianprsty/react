import React, { Component } from 'react'
var kendaraanList = [];
class ParkIn extends Component{
    render(){
        return(
            <button class = "btn btn-primary" onClick={generateId}>Masuk Parkir</button>
        )
    }
}


if (localStorage.getItem("kendaraanList")){
    kendaraanList = JSON.parse(localStorage.getItem("kendaraanList"))
}
const generateId = () =>{
    var date = new Date();
    var idParkir = kendaraanList.length + 1;
    var tipe = "";
    var platNo = "";
    var timeIn = date.getUTCMinutes();
    var timeOut ="";
    var biaya ="";
    var status ="masuk";
    
    
    kendaraanList.push({idParkir,tipe,platNo,timeIn,timeOut,biaya,status})

    localStorage.setItem("kendaraanList",JSON.stringify(kendaraanList))
    alert(`
        Berhasil Masuk !!!
        Id Parkir Anda ${idParkir}
    `)
}

export default ParkIn;
