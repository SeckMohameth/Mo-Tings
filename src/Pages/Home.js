import React from 'react'
import Herobanner from '../components/Herobanner'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <Herobanner />
       <div className='events'>
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
  )
}

export default Home