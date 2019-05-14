import React from 'react';
import './HeaderLogin.scss';
import { NavLink } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Header_Login extends React.Component {
    render() {
        return (
            <div className="header-login-contain">
            <NotificationContainer/>
                <div className="container-fluid">
                    <div className="title col-12 m-auto">T</div>
                    <div className="col-3 m-auto">
                        <NavLink to='/login' activeClassName='active-header' className='btn-header'><h4><b>LOG IN</b></h4></NavLink>
                        <NavLink to='/register' activeClassName='active-header' className='btn-header'><h4><b>REGISTER</b></h4></NavLink>
                    </div>
                </div>
            </div>            
        )
    }

}

export default Header_Login;