import React from 'react'
// import "../styles/shop.css"
import img2 from "../assets/banner-img.png"

const Shopping = () => {
  return (
    <>
    <header>
      <div class = "container">
      
        <nav class = "navbar">
          <a href = "index.html" class = "navbar-brand">Vintage.</a>
          <button type = "button" class = "navbar-toggler">
            <i class = "fas fa-bars"></i>
          </button>
          <div class = "navbar-collapse">
            <ul>
              <li><a href = "#">Home</a></li>
              <li><a href = "#">Gallery</a></li>
              <li><a href = "#">New Arrivals</a></li>
              <li><a href = "#">Blog</a></li>
              <li><a href = "#">contact</a></li>
            </ul>
          </div>

          <div class = "cart">
            <button type = "button" id = "cart-btn">
              <i class = "fas fa-shopping-cart"></i>
              <span id = "cart-count-info"></span>
            </button>
            
            <div class = "cart-container">
              <div class = "cart-list">
               
              </div>

              <div class = "cart-total">
                <h3>Total: $</h3>
                <span id = "cart-total-value"></span>
              </div>
            </div>
          </div>
        </nav>
       
        <div class = "banner">
          <div class = "banner-content">
            <h1>Furniture For Your Home</h1>
            <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet, quis nisi recusandae assumenda ea sequi obcaecati accusantium in provident dolore debitis autem neque vel commodi atque voluptates incidunt aliquam delectus veritatis? Exercitationem, fugit sed!</p>
            <div class = "btns">
              <button type = "button" class = "btn">know more</button>
              <button type = "button" class = "btn">more info</button>
            </div>
          </div>

          <div class = "banner-img">
            <img src = {img2} alt = ""/>
          </div>
        </div>
       
      </div>
    </header>
   


    <section class = "products">
      <div class = "container"></div>
        <h2>Our Products</h2>
        <div class = "product-list"></div>
        </section>
         
    <footer>
      <div class = "footer-banner">
        <div class = "container">
          <h2>Unlimited Furniture Collection</h2>
          <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est quod maxime nisi possimus corporis qui aliquid molestias sit iusto itaque, cum delectus tempore, distinctio velit. Repellat reiciendis suscipit quidem aliquid ipsam, nemo minus repudiandae quas eligendi natus voluptate nostrum?</p>
          <button type = "button" class = "btn">View More</button>
        </div>
      </div>

      <div class = "container">
        <div class = "social-icons">
          <a href = "#">
            <i class = "fab fa-facebook-f"></i>
          </a>
          <a href = "#">
            <i class = "fab fa-twitter"></i>
          </a>
          <a href = "#">
            <i class = "fab fa-instagram"></i>
          </a>
          <a href = "#">
            <i class = "fab fa-pinterest"></i>
          </a>
          <a href = "#">
            <i class = "fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>

    <script src="shop.js"></script>
    </>
  )
}

export default Shopping