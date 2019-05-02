import React, {Component} from 'react';
import './Register.scss';
import Header_Login from '../Header_Login/Header_Login';

class Register extends Component{
  render(){
    return(
      <div className="container-fluid custom-container h-100">
        <Header_Login/>
        <div className="col-lg-3 col-md-3 custom-div">
          <form className="form">
              <div className="card-body">
              <div className="input-group text">
                  <p>Name</p>
                </div>
                <div className="input-group">
                  <input id="input_name" type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="input-group text">
                  <p>Email</p>
                </div>
                <div className="input-group">
                  <input id="input_email" type="text" className="form-control" placeholder="Email"/>
                </div>
                <div className="input-group text">
                  <p>Password</p>
                </div>
                <div className="input-group">
                  <input id="input_password" type="password" placeholder="Password" className="form-control"/>
                </div>
                <div className="input-group text">
                  <p>Confirm Password</p>
                </div>
                <div className="input-group">
                  <input id="input_confirmPassword" type="password" placeholder="Password" className="form-control"/>
                </div>
              </div>
              <div className="col-10 m-auto">
                  <button id="button_register" class="btn-login"><b>REGISTER</b></button>
                </div>
          </form>
          <div className="footer-register"></div>
        </div>
      </div>
      )
  }
}

export default Register;