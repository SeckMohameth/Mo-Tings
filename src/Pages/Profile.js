import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Profile() {
    let navigate = useNavigate();
    let { username } = useParams();
  return (
    <div>
      {/* <h1>This is the Profile page for {username} </h1> */}
      <h1>Profile page</h1>

      <div>
        <label for="myfile">Upload a profile picture:</label>
        <br />
        <input type="file" id="myfile" name="myfile"/>
      </div>


      <div>
        
      </div>


    {/* <button onClick={() => {
      navigate("/about")
    }}
    >
      Change to about page</button> */}
    </div>
  )
}

export default Profile