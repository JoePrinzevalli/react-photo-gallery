import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';

// App Components 
import Nav from './Nav'
import Search from './Search';
import PhotoList from './PhotoList';
import apiKey from './config.js'

 class App extends Component   {

  constructor() {
    super();
    this.state = {
      photos: [],
      // loading: true
    }
  };

//Fetch Photos from flicker
performFetch = () => {
  axios.get(apiKey)
  .then(res => { 
    this.setState({
      photos: res.data
    })
  })
  .catch(err => {
    console.log('Error fetching and parsing data', err);
   })
}




  render() {
   return (
    <BrowserRouter>
      <div className="container">
        <Search />
        <Nav />

        <div className="photo-container">
          <h2>Dynamically insert results here</h2>
            <PhotoList data={this.state.photos}/>
        </div>
        
      </div>
    </BrowserRouter>
   )
  }
};


export default App;