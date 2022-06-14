import React from "react";
import {NavLink} from 'react-router-dom'
// import Photos from './Photos'

const Nav = props => {

    console.log(props.query);
    // console.log(props.search);

    const handleSearch = e => {
        this.props.navigate(`/${this.query.value}`);
        e.preventDefault()
        this.props.search(this.query.value)
        e.currentTarget.reset();
        
        // for browser history section
            // let searchPic = this.search.value
            // let path = `search/${searchPic}`;
            // this.props.history.push(path);
    };

    return (
    <nav className="main-nav">
        <ul>
            <li><NavLink onClick={handleSearch} to="/travel">Travel</NavLink></li>
            <li><NavLink onClick={handleSearch} to="/flowers">Flowers</NavLink></li>
            <li><NavLink to="/wildlife">Wildlife</NavLink></li>
      </ul>
    </nav>
    )
}


export default Nav;