import React from "react";
import PhotoList from "./PhotoList";


const Home = props => {
    return (
        <PhotoList data={props.data}/>
    )
};


export default Home;