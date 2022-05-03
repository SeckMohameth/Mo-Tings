import React, {useState, useEffect} from 'react'
import './About.css'


function About() {
  // state hello again and again
  const [count, setCount] = useState(0);
  // const [up, setUp] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUp((up) => up + 1)
  //   }, 1000);
  // }, [])

  return (
    <div className='about-content'>
      <div>
      <h1>About Page 🤓</h1>
      <p>MoTings is an online marketplace for people to sell their things, trade or rent them out to strangers<br/> Make money off you old <strong>tings</strong> or trade them in for something better 🔥</p>

      </div>
      
      <img style={{ width: "50%", borderRadius:"10%"}} src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1660&q=80" alt=""/>

{/* 
      <h1>{count}</h1>
      <button type='button' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button type='button' onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}

      {/* {up} */}
    </div>
   
  )
}

export default About