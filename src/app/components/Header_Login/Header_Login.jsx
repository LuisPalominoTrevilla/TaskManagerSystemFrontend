import React from 'react';
import './Header_Login.scss'

class Header_Login extends React.Component {
    constructor() {
        super();
      }
    render() {
        return (
            <div className="header-contain">
                <div className="container-fluid">
                    <div className="title col-12 m-auto">T</div>
                    <div className="col-3 m-auto">
                        <button id="button_loginComponent" class="btn-header"><h4><b>LOG IN</b></h4></button>
                        <button id="button_registerComponent" class="btn-header"><h4><b>REGISTER</b></h4></button>
                    </div>
                </div>
            </div>            
        )
    }

}

export default Header_Login;