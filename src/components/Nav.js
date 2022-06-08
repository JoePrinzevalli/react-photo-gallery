import React from "react";
import {NavLink} from 'react-router-dom'

const Nav = ({match}) => {
    return (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/travel">Travel</NavLink></li>
            <li><NavLink to="/flowers">Flowers</NavLink></li>
            <li><NavLink to="/wildlife">Wildlife</NavLink></li>
      </ul>
    </nav>
    )
}


export default Nav;