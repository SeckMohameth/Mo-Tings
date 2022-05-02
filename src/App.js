import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
// yooooooo
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Navbar from './components/NavBar';
import Herobanner from './components/Herobanner';

import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'


function App() {
  // const [state, setState] = useState(0)

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile/:username" element={<Profile />}/>

      </Routes>
    </div>
  
  );
}

export default App;
