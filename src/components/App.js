import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';

// App Components 
import Nav from './Nav'
import Search from './Search';
import PhotoList from './PhotoList';
import apiKey from './config.js'

class App extends Component   {


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
  

  render() {
    console.log(this.state.photos)
   return (
    <BrowserRouter>
      <div className="container">
      <Search />
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/' element={<PhotoList data={this.state.photos}/>} />
        </Routes>
      </div>
    </BrowserRouter>
   )
  }
};


export default App;