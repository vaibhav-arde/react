import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import PortfolioItem from '../components/PortfolioItemPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/portfolio' component={PortfolioPage} exact={true} />
                <Route path='/portfolio/:id' component={PortfolioItem} />
                <Route path='/contactpage' component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;