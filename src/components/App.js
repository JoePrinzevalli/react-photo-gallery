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
    loading: true
  }

  //Get Photos from flicker
 performFetch = (query = 'racecars') => {
    axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
    .then(res => { 
      this.setState({
        photos: res.data.photos.photo,
        loading: false
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
      {
        (this.state.loading)
        ? <p>Loading...</p>
        : <PhotoList data={this.state.photos}/>
      }

      <Routes>
        <Route path='/travel' element={<Search/>} />
        <Route path='/flowers' element={Search} />
        <Route path='/wildlife' element={Search} />
        </Routes>
      </div>
    </BrowserRouter>
   )
  }
};


export default App;