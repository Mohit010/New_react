import React from 'react'
import img1 from "../assets/homeimg.jpg"
import {HashLink} from "react-router-hash-link";
// import '../styles/header.scss'
import '../styles/home.scss'
import vdo from '../assets/desert.mp4'

const Home = () => {
  return (
    <>
    <video   className='bgvideo' src={vdo} autoPlay loop muted></video>
    <div className='hero'>
        <div className='left'>
            <h1  id='welcome'>Welcome
            <span className="to"> to</span>
            <span className="our"> our</span>
            <span className="site"> Site</span>
             </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam dignissimos voluptatum incidunt quos eum, soluta nesciunt a accusamus aut quisquam, nobis consequuntur doloremque aliquam vel sequi quas sint? Tempora, ipsa.</p>
        </div>
    </div>
    <HashLink to={"/food"}>
    <button  className='gts'>Get Started</button></HashLink>
    </>
  )
}

export default Home