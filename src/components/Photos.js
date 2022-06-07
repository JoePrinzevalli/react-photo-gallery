import React from "react";

const Photos = (props) => {
    return (
        <ul>
            <li>
                <img src= {props.url} alt={props.title}/>
            </li>
        </ul>
    )
}


export default Photos;