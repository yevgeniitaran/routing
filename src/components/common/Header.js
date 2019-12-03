import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    const activeStyle = {color: "green"};
    return (
        <nav>
            <NavLink activeStyle={activeStyle} exact to="/">Home</NavLink>
            | <NavLink activeStyle={activeStyle} to="/courses">Course</NavLink>
            | <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
        </nav>
    )
}

export default Header;