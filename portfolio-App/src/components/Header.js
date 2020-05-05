import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>PORTFOLIO</h1>

        <NavLink to='/' activeClassName='is-active' exact={true}> Home Page</NavLink>
        <NavLink to='/portfolio' activeClassName='is-active' > Portfolio </NavLink>
        <NavLink to='/contactPage' activeClassName='is-active' > Contact Page </NavLink>
    </header>
)

export default Header;