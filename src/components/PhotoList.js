import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js'


class PhotoList extends Component {
    
    state = {
        photos: [],
        // loading: true
      }
  
    //Fetch Photos from flicker
    performFetch = () => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => { 
        this.setState({
          photos: res.photos.photo
        })
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      })
    }
    
    render(props) {
        console.log(props);
    return (
        <div className="photo-container">
            <h2>Results</h2>
        </div>
    )
    }
}


export default PhotoList;
