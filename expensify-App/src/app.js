import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my Dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my Add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my Edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my Help component
    </div>
);

const NotFoundPage = () => (
    <div>
        Page Not Found : 404!! -- <Link to='/' > Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <h3><Link to='/' > Dashboard</Link></h3>
        <h3><Link to='/create' > Create Expense</Link></h3>
        <h3><Link to='/edit' > Edit Expense</Link></h3>
        <h3><Link to='/help' > Get Help</Link></h3>

        <NavLink to='/' activeClassName = 'is-active' exact={true}> Dashboard</NavLink>
        <NavLink to='/create' activeClassName = 'is-active' > Create Expense</NavLink>
        <NavLink to='/edit' activeClassName = 'is-active' > Edit Expense</NavLink>
        <NavLink to='/help' activeClassName = 'is-active' > Get Help</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
