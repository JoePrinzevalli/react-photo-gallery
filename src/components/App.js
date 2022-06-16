import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';


// App Components 
import PhotoList from './PhotoList';
import PageNotFound from './PageNotFound';
import apiKey from './config.js'
import Header from './Header';
import Home from './Home';

class App extends Component  {

  state = {
    photos: [],
    loading: true,
    query: 'travel'
  }

  //Get Photos from flicker
 performFetch = (query) => {
    axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
    .then(res => { 
      this.setState({
        photos: res.data.photos.photo,
        loading: false,
        query: query
      })
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    })
  }

  componentDidMount() {
    this.performFetch(window.location.pathname)
    
  };

  
  render() {
   return (
    <BrowserRouter>
      <div className="container">
        <Header search={this.performFetch(window.location.pathname)} query={this.state.query} />
        <Routes>
          <Route path='/' element={<Home  search={this.performFetch} />} />
          <Route path='/:query' element={<PhotoList loading={this.state.loading} data={this.state.photos} /> } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
   )
  }
};

export default App;