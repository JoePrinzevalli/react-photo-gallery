import React from 'react';
import Photos from './Photos'
import NoResults from './NoResults'
import { useParams } from 'react-router-dom';

const PhotoList = props => {

    //Returns fetch data from App.js
    let results = props.data
    let loading = props.loading;

    //For dynamic gallery heading
    let title;
    let url = useParams().query //check and make sure this works for no search results

    //maps over object returend from fetch function and creates url to display image
    let photos;
    if(results.length > 0 ) {
      
      title = `${url} Gallery`
      photos = results.map(photo => <Photos url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} /> )
    } else {
      photos = <NoResults />
    }

    return (
      <div className="photo-container">
      <h2>{title}</h2>
            {(loading)
            ?<h2>Loading...</h2>
            :<ul> {photos}</ul>
            }
    
      </div>
    ) 
};


export default PhotoList;