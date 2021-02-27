import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <header className="header">
		<h1 className="logo"><a href="#">Members </a></h1>
      <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          
      </ul>
	</header> 
        </div>
    )
}

export default Navbar
