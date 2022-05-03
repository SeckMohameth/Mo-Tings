import React from 'react'
import './NavBar.css'

function Navbar() {
    const navBarStyle = {
        backgroundColor: rgb(211, 40, 40),
        height: "20px",
        padding: "15px",
    }
    return (
        <div className={navBarStyle}>
            {/* <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul> */}
        </div>
    )
}
export default Navbar;