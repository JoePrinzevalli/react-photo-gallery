import React from "react";
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const handleSearch = e => {
        this.props.navigate(`/${this.query.value}`);
        e.preventDefault()
        this.props.search(this.query.value)
        e.currentTarget.reset();
    };

    return (
    <nav className="main-nav">
        <ul>
            <li><NavLink onClick={handleSearch} to="/animals">Animals</NavLink></li>
            <li><NavLink onClick={handleSearch} to="/superman">Superman</NavLink></li>
            <li><NavLink onClick={handleSearch} to="/space">Space</NavLink></li>
      </ul>
    </nav>
    )
};

export default Nav;