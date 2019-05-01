import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';


class Menu extends React.Component {
    render(){
        return (
            <div className='menu-contain'>
                <NavLink className ='menu-link' activeClassName='active-menu' to='/habits'>Habits</NavLink>
                <NavLink className ='menu-link' activeClassName='active-menu' to='/tasks' >Tasks</NavLink>
                <NavLink className ='menu-link' activeClassName='active-menu' to='/report'>Report</NavLink>
            </div>
        )
    }

}

export default Menu;