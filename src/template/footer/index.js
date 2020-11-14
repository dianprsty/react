import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="page-footer font-small mdb-color lighten-3 pt-4">
            
              <div className="container text-center text-md-left">
            
                <div className="row">
            
                  
            
                  <hr className="clearfix w-100 d-md-none"/>
            
                  <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            
                    <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
            
                   
                  </div>
            
                  <hr className="clearfix w-100 d-md-none"/>
            
                  <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            
                    <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
            
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          <i className="fas fa-home mr-3"></i> </p>
                      </li>
                    </ul>
            
                  </div>
            
                  <hr className="clearfix w-100 d-md-none"/>
            
                  <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
            
                    <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
            
                    {/* <a  href="#" type="button" className="btn-floating btn-fb" >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a type="button" className="btn-floating btn-tw" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a type="button" className="btn-floating btn-gplus" href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a type="button" className="btn-floating btn-dribbble" href="#">
                      <i className="fab fa-dribbble"></i>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://www.parksetyo.com/"> Parksetyo</a>
              </div>
            
            </footer>
        );
    }
}
 
export default Footer;