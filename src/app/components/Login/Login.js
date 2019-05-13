import React, {Component} from 'react';
import './Login.scss'
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import {accountLogin } from '../../actions/account';

class Login extends Component{
  constructor() {
    super();
    this.logInButton = this.logInButton.bind(this);
  }

  logInButton = () => {
    this.props.history.push('/habits');
  }
  componentDidMount(){
    accountLogin();
  }
  render(){
    return(
        <div className="container-fluid custom-container h-100">
          <HeaderLogin/>
          <div className="col-lg-3 col-md-3 custom-div">
            <form className="form">
                <div className="card-body">
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
                </div>
                <div className="col-10 m-auto">
                  <button id="button_login" className="btn-login" onClick={this.logInButton}><b>LOG IN</b></button>
                </div>
            </form>
          </div>
          <div className="footer-login"></div>
        </div>
      )
  }
}

export default Login;