import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';

// App Components 
import PhotoList from './PhotoList';
import PageNotFound from './PageNotFound';
import apiKey from './config.js'

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
        loading: false,
      })
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    })
  }

  componentDidMount() {
      this.performFetch()
  };

  // changeQuery = () => {
  //   this.setState({
  //     query: this.params.query
  //   })
  // }


  render() {

   return (
    <BrowserRouter>
      <div className="container">
      <Routes>
      {/* route for whatever value is in search bar*/}
        <Route path='/' element={ 
        (this.state.loading)
        ? <h1>Loading...</h1>
        : <PhotoList data={this.state.photos} search={this.performFetch}/>
      }/> 

        {/* routes for 3 nav buttons */}
    {/* 
        <Route path='/travel' element={<PhotoList onClick={this.setQuery}/>} />
        <Route path='/flowers' element={<PhotoList  onClick={this.setQuery}/>} />
        <Route path='/wildlife' element={<PhotoList  onClick={this.setQuery}/>} /> 
        */}

        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
   )
  }
};


export default App;