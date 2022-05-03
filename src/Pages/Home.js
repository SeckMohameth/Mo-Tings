import React from 'react'
import './Home.css'

import Herobanner from '../Components/Herobanner'
import Card from '../Components/Card'

function Home() {
  return (
    <div>
      <Herobanner />
      <h1>Trending Items</h1>

       <div className='events'>
         <Card 
          image="https://images.unsplash.com/photo-1612547036242-77002603e5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          title="DAE Camera"
          location="New Haven, CT"
         />
         <Card 
          image="https://images.unsplash.com/photo-1630051822408-b80dde2f5681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGhpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          title="Synchrony PS5"
          location="Stamford, CT"
         />
         <Card 
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRoaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          title="Mo's Headphones"
          location="West Haven, CT"
         />
         <Card 
          image="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRoaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          title="Patricia's Plant"
          location="Hartford, CT"
         />

       </div>
    </div>
  )
}

export default Home