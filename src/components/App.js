import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import axios from 'axios';

// App Components 
import Nav from './Nav'
import Search from './Search';
import PhotoList from './PhotoList';
// import apiKey from './config.js'

const App = () =>   {
   return (
    <BrowserRouter>
      <div className="container">
      <Search />
      <Nav />
      <PhotoList />
      <Routes>
        <Route path='/cats' element={PhotoList} />
        <Route path='/cats' element={PhotoList} />
        <Route path='/cats' element={PhotoList} />
        </Routes>
      </div>
    </BrowserRouter>
   )
};


export default App;