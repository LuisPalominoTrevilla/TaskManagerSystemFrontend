import React, {Component} from 'react';
import './Login.scss'
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import {accountLogin } from '../../actions/account';
import  Notify  from '../../utils/notifier';


class Login extends Component{
  constructor() {
    super();
    this.state = {
      email : "",
      password: "",
    };
    this.logInButton = this.logInButton.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
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

  logInButton = () => {
    accountLogin(this.state.email, this.state.password).then(
      (res) => {
        if(res.data.name) {
          this.props.history.push('/habits');
          this.setState({
            email: '',
            password: ''
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
                    <p>Email</p>
                  </div>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Email" onChange={(e) => this.handleChangeEmail(e)}/>
                  </div>
                  <div className="input-group text">
                    <p>Password</p>
                  </div>
                  <div className="input-group">
                    <input type="password" placeholder="Password" className="form-control" onChange={(e) => this.handleChangePassword(e)}/>
                  </div>
                </div>
                <div className="col-10 m-auto">
                  <button type='button' className="btn-login" onClick={this.logInButton}><b>LOG IN</b></button>
                </div>
            </form>
          </div>
          <div className="footer-login"></div>
        </div>
      )
  }
}

export default Login;