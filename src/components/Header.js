import React from 'react';

import Nav from './Nav'
import Search from './Search';

const Header = (props) => {
    return (
        <div>
            <Search search={props.search}/>
            <Nav query={props.query} search={props.search}/>
        </div>
    )
};

export default Header;