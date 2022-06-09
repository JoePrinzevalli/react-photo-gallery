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
 performFetch = (query = this.state.query) => {
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
      <Header search={this.performFetch} />
      <Routes>
        <Route path='/' element={<Home data={this.state.photos} search={this.performFetch} />} />
        {/* had trouble showing stock photos on my home page, is this way ok??? */}

        <Route path='/:query' element={ 
        (this.state.loading)
        ? <h1>Loading...</h1>
        : <PhotoList data={this.state.photos} search={this.performFetch} />
      }/>
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
   )
  }
};


export default App;