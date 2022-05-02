import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Navbar from './components/NavBar';
import Herobanner from './components/Herobanner';

function App() {
  // const [state, setState] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Herobanner />
       <div>
         <Card 
          title="DAE"
          location="New Haven, CT"
         />
         <Card 
          title="Synchrony Opening"
          location="Stamford, CT"
         />
         <Card />
         <Card />

       </div>
    </div>
  );
}

export default App;
