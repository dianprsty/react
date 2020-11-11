import React, {Component} from 'react';


class Login  extends Component {

    render() { 
        return (
            <>
                <div class="login">
                    <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-3">
                            <input name="email" type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-3">
                            <input name="password" type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-3">
                            <button type="submit" class="btn btn-primary" onClick={getAtribut}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
         );
    }
}
 
const getAtribut = () =>{
    const email = getInput("input[name=email]").value;
    const password =getInput("input[name=password]").value;
    login(email,password);
}
const getInput = (el) => {
    return document.querySelector(el);
}
const login = (email,password) => {
    if(email === "admin@admin" && password === "admin"){
        alert("Harusnya Pindah ke Halaman Admin ")
    }else if(email === "mobil@operator" && password === "operator"){
        alert("Harusnya Pindah ke Halaman Operator mobil");
    }else if(email === "motor@operator" && password === "operator"){
        alert("Harusnya Pindah ke Halaman Operator motor");
    }else{
        alert("email atau password anda salah !!!");
    }
}

export default Login ;