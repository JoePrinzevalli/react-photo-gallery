import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js'
import Photos from './Photos'
import NoResults from './NoResults'



class PhotoList extends Component {
    
    state = {
        photos: [],
        // loading: true
      }
  
     
      

    //Fetch Photos from flicker
     performFetch = () => {
        axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
        .then(res => { 
          this.setState({
            photos: res.data.photos.photo
          })
        })
        .catch(err => {
          console.log('Error fetching and parsing data', err);
        })
    }
    componentDidMount() {
        this.performFetch()
    }
  

    render() {
      let results = this.state.photos
      console.log(results);
      let photos;

      if(results.length > 0) {
        photos = results.map(photo => <Photos url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} /> ) 
      } else {
        photos = <NoResults />
      }


        return (
            <div className="photo-container">
                <h2>Results</h2>
                  <ul>
                    {photos}
                  </ul>
            </div>
        )
    }
}


export default PhotoList;
