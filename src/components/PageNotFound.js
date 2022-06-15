import React from "react";
import Error from './images/Error.png'

const PageNotFound = () => {
    return (
        <div className="error-flex">
            <h2>Page not found</h2>
            <img src={Error} alt='thanos' className='error-pic'></img>
            <h4>Oops! Looks like you were snapped to the wrong page...</h4>
            <a className='error-button' href='/'>Back home</a>
        </div>
    )
};

export default PageNotFound;