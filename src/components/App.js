import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';

// App Components 
import Nav from './Nav'
import Search from './Search';
import PhotoList from './PhotoList';
import apiKey from './config.js'

class App extends Component  {

  state = {
    photos: [],
    // loading: true
  }

//Fetch Photos from flicker
 performFetch = (query = 'racecars') => {
    axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
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
  };

  render() {
   return (
    <BrowserRouter>
      <div className="container">
      <Search onSearch={this.performFetch}/>
      <Nav />
      <PhotoList data={this.state.photos}/>
      <Routes>
        <Route path='/cats' element={PhotoList} />
        <Route path='/cats' element={PhotoList} />
        <Route path='/cats' element={PhotoList} />
        </Routes>
      </div>
    </BrowserRouter>
   )
  }
};


export default App;