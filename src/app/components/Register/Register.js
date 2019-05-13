import React, {Component} from 'react';
import './Register.scss';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import {accountRegister } from '../../actions/account';
import  Notify  from '../../utils/notifier';

class Register extends Component{
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      confirmPassword: null,
      name: null
    }
    this.registerButton = this.registerButton.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleChangeConfirmPassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  registerButton = () => {
    accountRegister(this.state.email, this.state.password, this.state.name).then(
      (res) => {
        console.log(res);
        if(res.data.name) {
          this.props.history.push('/login');
          this.setState({
            email: null,
            password: null,
            name: null
          })
        }
      }
    ).catch((err) => {
        Notify.createNotification('error', 'LogIn Error', err.message);
      }
    );
  }
  render(){
    return(
      <div className="container-fluid custom-container h-100">
        <HeaderLogin/>
        <div className="col-lg-3 col-md-3 custom-div">
          <form className="form">
              <div className="card-body">
              <div className="input-group text">
                  <p>Name</p>
                </div>
                <div className="input-group">
                  <input id="input_name" type="text" className="form-control" placeholder="Name" onChange={this.handleChangeName}/>
                </div>
                <div className="input-group text">
                  <p>Email</p>
                </div>
                <div className="input-group">
                  <input id="input_email" type="text" className="form-control" placeholder="Email" onChange={this.handleChangeEmail}/>
                </div>
                <div className="input-group text">
                  <p>Password</p>
                </div>
                <div className="input-group">
                  <input id="input_password" type="password" placeholder="Password" className="form-control" onChange={this.handleChangePassword}/>
                </div>
                <div className="input-group text">
                  <p>Confirm Password</p>
                </div>
                <div className="input-group">
                  <input id="input_confirmPassword" type="password" placeholder="Password" className="form-control" onChange={this.handleChangeConfirmPassword}/>
                </div>
              </div>
              <div className="col-10 m-auto">
                  <button type='button' id="button_register" className="btn-login" onClick={this.registerButton}><b>REGISTER</b></button>
                </div>
          </form>
          <div className="footer-register"></div>
        </div>
      </div>
      )
  }
}

export default Register;