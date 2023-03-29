import React from 'react';
// import {input} from 'react-dom';
// import "../script"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
import "../styles/food.css"
import vid2 from "../assets/kitchen.mp4"


const food = () => {
  return (
    <>
    <div className='food-body'>
    <video  className='bgvideo' src={vid2} autoPlay loop muted></video>
    <div class="container">
    <div class="meal-wrapper">
      <div class="meal-search">
        <h2 class="title">Find Meals For Your Ingredients</h2>
        <blockquote>Real food doesn't have ingredients, real food is ingredients.<br/>
          <cite>- Jamie Oliver</cite>
        </blockquote>

        <div class="meal-search-box">
          <input type="text" class="search-control" placeholder="Enter an ingredient" id="search-input"/>
          <button type="submit" class="search-btn btn" id="search-btn">
            <i class="fas fa-search">srch</i>
          </button>
        </div>
      </div>

      <div class="meal-result">
        <h2 class="title">Your Search Results:</h2>
        <div id="meal">
         
        </div>
      </div>


      <div class="meal-details">
       
        <button type="button" class="btn recipe-close-btn" id="recipe-close-btn">
          <i class="fas fa-times"></i>
        </button>

  
        <div class="meal-details-content">
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default food