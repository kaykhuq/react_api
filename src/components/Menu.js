import React, { Component } from 'react';
import {  Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'HomePage',
        to: '/',
        exact: true,
    },
    {
        name: 'Products',
        to: '/product-list',
        exact: false,
    },
];
const MenuLink = ({ label, to, activeWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
}
class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" >CALL API</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        to={menu.to}
                        label={menu.name}
                        activeWhenExact={menu.exact}
                    />
                );
            })
        }
        return result;
    }
}

export default Menu;
