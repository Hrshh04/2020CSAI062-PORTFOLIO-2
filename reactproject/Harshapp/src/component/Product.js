import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import RateClass from './Rating2';
export default function Product() {
  return (
    <div className='container'>
    <div className='card mb-3'>
  <img src="image/genos.jpg"class="card-img-top" alt="jjk" height={1000}/>
  <div class="card-body text-center">
    <h2 class="card-title"style={{color:"blueviolet" }}><b>ani.mepiece</b></h2>
    <h3 class="card-text">$50</h3>
    <p class="card-text"><small class="text-muted"><b></b></small></p>
    <RateClass ratting='4'/>
  </div>
  </div>
  </div>
  )
}


