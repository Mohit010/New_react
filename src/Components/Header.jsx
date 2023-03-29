import React from 'react'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import '../styles/header.scss'



const Header = () => {
  return (
    <>
    <div className='top'>
      "You don't have to worry,until we are here..."
    </div>
     <nav>
        
        <h1 className='line'>Take it easy!</h1>
        <main>
            <HashLink to={"/home"}>Home</HashLink>
            <HashLink to={"/food"}>Food</HashLink>
            <HashLink to={"/news"}>News</HashLink>
            <HashLink to={"/#about"}>Fitness</HashLink>
            <HashLink to={"/health"}>Health track</HashLink>
            <HashLink to={"/shop"}>Shopping</HashLink>
            
        </main>
    </nav>
    </>
   
  )
}

export default Header