import React from 'react'

export default function Slider() {
  return (
    <>
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

     
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
    </div>
  
    
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles" className="d-block w-100" />
      </div>
      <div className="carousel-item">
        <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" className="d-block w-100" /> 
      </div>
      <div className="carousel-item">
        <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" className="d-block w-100" />
      </div>
      <div className="carousel-item">
        <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="New York" className="d-block w-100" />
      </div><div className="carousel-item">
        <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="New York" className="d-block w-100" />
      </div><div className="carousel-item">
        <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="New York" className="d-block w-100" />
      </div>
    </div>
  
    
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
  <h1 className="text-center mt-5" id="camp">CAMPAIGNS</h1>
  <div className="quotes-slider d-flex justify-content-center flex-wrap" id="Quotes-campaigns" data-count="4">
            
    <div className="quotes-slide--5babb33c-b1e1-47e9-aa59-31f9c1d86d17 ms-3">
      <a href="">
        <img src="//www.zudio.com/cdn/shop/files/Z-Story-Denim_1024x1024.jpg?v=1664349186" alt="" />
      </a>
    </div>
  
    <div className="quotes-slide--1580371293798 ms-3">
      <a href="">
        <img src="//www.zudio.com/cdn/shop/files/AROUND-KIDDING-ZUDIO_1024x1024.jpg?v=1613537634" alt="" />
      </a>
    </div>
  
    <div className="quotes-slide--1598709022684 ms-3">
      <a href="">
        <img src="//www.zudio.com/cdn/shop/files/AROUND-KIDDING-ZUDIO-01_1024x1024.jpg?v=1613537634" alt="" />
      </a>
    </div>
  
    <div className="quotes-slide--1572356503483 ms-3 mt-3">
      <a href="/pages/zudiolovesdenim">
        <img src="//www.zudio.com/cdn/shop/files/Zudio-love-denim_1024x1024.jpg?v=1613523931" alt="" />
      </a>
    </div>
  
</div>
</>
  )
}
