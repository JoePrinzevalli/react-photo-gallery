import React from 'react';

import Nav from './Nav'
import Search from './Search';

const Header = (props) => {
    return (
        <div>
            <Search search={props.search}/>
            <Nav />
        </div>
    )
}


export default Header;