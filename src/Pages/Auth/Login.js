import React, {useState} from 'react'
import './Login.css'

function Login() {
  const logIn = true
  return (
    <div>
        {/* <h1>Login</h1> */}

      
        {logIn ? 

        <div className="login">
        <img src="https://images.unsplash.com/photo-1563804809760-21219f846204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8anVua3xlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"/>
          <h1>Login</h1>
          <form>
            <input />
            <input />
            <button>Sign Up!</button>
          </form>
        </div> 
        : 
        <div className='login'>
          <div class="cover"> </div>
          {/* <img src="https://images.unsplash.com/photo-1567687311233-4283c282b83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yJTIwc2FsZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"/> */}
          <h1>Sign Up</h1>
          <form>
            <input />
            <input />
            <input />
            <button>Sign Up!</button>
          </form>
        </div>}
    </div>
  )
}

export default Login