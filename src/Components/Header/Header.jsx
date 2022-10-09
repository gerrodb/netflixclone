import React from 'react'
import NETFLIXlogo from "../../NETFLIXlogo.png"
import { Link } from "react-router-dom"
import {ImSearch} from "react-icons/im"
const Header = () => {
  return (
    <nav className='header'>

        <img src= {NETFLIXlogo} alt="logo" />

        <div>
            <Link to= "/tvshows" className='home-button'>Home</Link>
            <Link to= "/movies">TV Shows</Link>
            <Link to= "/recent">Movies</Link>
            <Link to= "/myList">New & Popular</Link>
            <Link to= "/myList">My List</Link>
            <Link to= "/myList">Browse by Languages</Link>
        </div>

        <ImSearch />
    </nav>

  )
}

export default Header