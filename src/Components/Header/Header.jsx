import React from 'react'
import NETFLIXlogo from "../../NETFLIXlogo.png"
import { Link } from "react-router-dom"
import {ImSearch} from "react-icons/im"
import {IoMdNotifications} from "react-icons/io"
import {CgProfile} from "react-icons/cg"

const Header = () => {
  return (
    <nav className='header'>

        <img src= {NETFLIXlogo} alt="logo" />

        <div>
            <Link to= "/homeButton" className='home-button'>Home</Link>
            <Link to= "/tvShows">TV Shows</Link>
            <Link to= "/movies">Movies</Link>
            <Link to= "/newPopular">New & Popular</Link>
            <Link to= "/myList">My List</Link>
            <Link to= "/browseByLanguages">Browse by Languages</Link>
        </div>

        <ImSearch />
        <IoMdNotifications />
        <CgProfile />
        
       
    </nav>

  )
}

export default Header