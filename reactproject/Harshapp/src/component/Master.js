import React from "react";
import RateClass from "./Rating2";
let masterClass=[
    {productName:"Laptop",
    img:"image/laptop.jpg",
price:"55000",
descrption:"Processor: 12th Gen Intel Core i7-12700H Processor 2.3 GHz (24M Cache, up to 4.7 GHz, 14 cores: 6 P-cores and 8 E-cores)",
ratting:"3"},
{productName:"Mouse",
img:"image/mouse.jpg",
price:"550",
descrption:"Reliable Wireless Connection : Enjoy a wireless connection up to 10m away thanks to a plug-and-forget USB mini-receiver ",
ratting:"4"},
{productName:"TP-Link Archer AC1200",
img:"image/Router.webp",
price:"2550",
descrption:"AC1200 Dual-Band Wi-Fi —— 867 Mbps at 5 GHz and 400 Mbps at 2.4 GHz band;MU-MIMO Technology —— Simultaneously transfers data to multiple devices for 2× faster performance ",
ratting:"5"},
{productName:"Keyboard",
img:"image/Kayboard.webp",
price:"550",
descrption:"Keyboard with wired ",
ratting:"2"}
]; 


export default function Product1()
{
    return masterClass.map((obj)=>{
        return (
            <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
            <div className='card mb-3'>
          <img src={obj.img} class="card-img-top" alt="..." height={500 }/>
          <div class="card-body text-center">
            <h2 class="card-title"style={{color:"blueviolet" }}><b>{obj.productName}</b></h2>
            <h3 class="card-text">{obj.price}</h3>
            <p class="card-text"><small class="text-muted"><b>{obj.descrption}</b></small></p>
            <RateClass ratting={obj.ratting}/>
          </div>
          </div>
          </div>
          )
    }
    );
};