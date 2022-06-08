import React from 'react';
import Photos from './Photos'
import NoResults from './NoResults'

import Nav from './Nav'
import Search from './Search';



const PhotoList = props => {

    //Returns fetch data from App.js
    let results = props.data
    let photos;

    

    //maps over object returend from fetch function and creates url to display image
    if(results.length > 0) {
      
      photos = results.map(photo => <Photos url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} /> )
    } else {
      photos = <NoResults />
    }
    return (
      
      <div>
      <Search search={props.search}/>
      <Nav />
      <div className="photo-container">
      <h2>Fix header for different screeens</h2>
            <ul>
              {photos}
            </ul>
      </div>
      </div>
    ) 
}


export default PhotoList;
