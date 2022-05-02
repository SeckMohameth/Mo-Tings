import {useState, useEffect} from 'react'


function About() {
  // state hello again and again
  const [count, setCount] = useState(0);
  const [up, setUp] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setUp((up) => up + 1)
    }, 1000);
  }, [])

  return (
    <div>
      About

      <h1>{count}</h1>
      <button type='button' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button type='button' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>

      {up}
    </div>
   
  )
}

export default About