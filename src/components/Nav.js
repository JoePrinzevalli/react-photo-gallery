import React from "react";
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/">Monkeys</NavLink></li>
            <li><NavLink to="/">Oracas</NavLink></li>
            <li><NavLink to="/">Kangaroos</NavLink></li>
      </ul>
    </nav>
    )
}


export default Nav;