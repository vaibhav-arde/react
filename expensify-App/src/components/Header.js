import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <h3><Link to='/' > Dashboard</Link></h3>
        <h3><Link to='/create' > Create Expense</Link></h3>
        <h3><Link to='/edit/:id' > Edit Expense</Link></h3>
        <h3><Link to='/help' > Get Help</Link></h3>

        <NavLink to='/' activeClassName='is-active' exact={true}> Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active' > Create Expense</NavLink>
        <NavLink to='/edit/:id' activeClassName='is-active' > Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active' > Get Help</NavLink>
    </header>
)

export default Header;