import React from 'react';
import Photos from './Photos'
import NoResults from './NoResults'




const PhotoList = (props, {match}) => {

    //Returns fetch data from App.js
    let results = props.data
    let photos;
    let title;

    // let topic = match.query.topic;
    //     console.log(topic);
    
    console.log(props.search);
    

    //maps over object returend from fetch function and creates url to display image
    if(results.length > 0) {
      title = 'Get title dynaimcially here with query'
      photos = results.map(photo => <Photos url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} /> )
    } else {
      photos = <NoResults />
    }
    return (
      <div className="photo-container">
      <h2>{title}</h2>
      {/* <p>{query}</p> */}
            <ul>
              {photos}
            </ul>
      </div>
    ) 
}


export default PhotoList;
