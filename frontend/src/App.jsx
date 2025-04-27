import React from 'react'

import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './assets/components/Login';
import Search from './assets/page/Search';
import Home from './assets/page/Home';
import Recent from './assets/page/components/Recent'
function App() {
  

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/search' element={<Search/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/recent' element={<Recent/>} />
    </Routes>
  </BrowserRouter>
      
  );
}

export default App;
