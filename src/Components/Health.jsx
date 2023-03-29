import React from 'react'
import '../styles/health.scss'
import helth from "../assets/breath.jpg"
import hlt from "../assets/breaths.jpeg"
import ht from "../assets/breathree.webp"
const Health = () => {
  return (
    <div class='health'>

        <div class="card cd" style={{width: "68rem"}}>
            <br />
    <div className='ig'>
    <img src={hlt} class="card-img-top" id='imgo' alt="..."/>
    </div>
  <div class="card-body">
    <h5 class="card-title">Beginner </h5>
    <p class="card-text">Some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum hic voluptas fugit assumenda modi praesentium obcaecati totam perferendis repudiandae ratione veritatis, error debitis amet distinctio, a et ipsam magnam! Accusamus amet nobis tempore, cum at velit! Quidem dignissimos quam repudiandae repellendus quas temporibus magni, illo expedita voluptatibus quis autem similique earum non. Placeat distinctio ipsam quod natus cum! Expedita ut dolorem a minima cum quisquam at, doloremque optio numquam, quaerat vero consectetur quod deleniti non ipsum libero animi aliquam possimus beatae laboriosam officia accusamus maiores. Pariatur exercitationem, molestiae non corporis officiis repellat minima dignissimos, mollitia, nulla est necessitatibus amet!</p>
    <a href="#" class="btn btn-primary">Start the Exercise</a>
  </div>
</div>

<div class="card cd" style={{width: "68rem"}}>
<br />
  <img src={helth} class="card-img-top" id='imgt' alt="..."/>
  
  <div class="card-body">
    <h5 class="card-title">Intermediate</h5>
    <p class="card-text">Som Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum hic voluptas fugit assumenda modi praesentium obcaecati totam perferendis repudiandae ratione veritatis, error debitis amet distinctio, a et ipsam magnam! Accusamus amet nobis tempore, cum at velit! Quidem dignissimos quam repudiandae repellendus quas temporibus magni, illo expedita voluptatibus quis autem similique earum non. Placeat distinctio ipsam quod natus cum! Expedita ut dolorem a minima cum quisquam at, doloremque optio numquam, quaerat vero consectetur quod deleniti non ipsum libero animi aliquam possimus beatae laboriosam officia accusamus maiores. Pariatur exercitationem, molestiae non corporis officiis repellat minima dignissimos, mollitia, nulla est necessitatibus amet!.</p>
    <a href="#" class="btn btn-primary">Start the Exercise</a>
  </div>
</div>

<div class="card cd" style={{width: "68rem"}}>
    <br />
<div className='ig'>
    <img src={ht} class="card-img-top" id='imgo' alt="..."/>
    </div>
  <div class="card-body">
    <h5 class="card-title">Expert</h5>
    <p class="card-text">Some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum hic voluptas fugit assumenda modi praesentium obcaecati totam perferendis repudiandae ratione veritatis, error debitis amet distinctio, a et ipsam magnam! Accusamus amet nobis tempore, cum at velit! Quidem dignissimos quam repudiandae repellendus quas temporibus magni, illo expedita voluptatibus quis autem similique earum non. Placeat distinctio ipsam quod natus cum! Expedita ut dolorem a minima cum quisquam at, doloremque optio numquam, quaerat vero consectetur quod deleniti non ipsum libero animi aliquam possimus beatae laboriosam officia accusamus maiores. Pariatur exercitationem, molestiae non corporis officiis repellat minima dignissimos, mollitia, nulla est necessitatibus amet!</p>
    <a href="#" class="btn btn-primary">Start the Exercise</a>
  </div>
</div>
    </div>
  )
}

export default Health