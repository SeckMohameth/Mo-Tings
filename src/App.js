import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';

import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Explore from './Pages/Explore'
import Login from './Pages/Auth/Login'


function App() {

  return (
    <div>
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/auth/login" element={<Login />} />
      </Routes>
     
    </div>
  );
}

export default App;


//mo