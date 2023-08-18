import React, { useEffect, useState } from 'react'

const Home = (props:any) => {
    
  return (
    <>
     <div className="trademark" style={{backgroundImage: 'url("//cdn.shopify.com/s/files/1/2159/5497/files/parallax-bg2.jpg?v=1613539924")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="circle">
          <div className="circle1">
            <div className="circle1-content">
              <div className="circle1-logo">
                <img src="./img/logo1.png"  />
              </div>
              <div className="circle1-title">
                <h3>HANDMADE MUFFINS</h3>
                <h1> <span className="span1">Glorious</span><span className="span2">TASTE</span></h1>
                <h3>Made with love &amp; care</h3>
              </div>
              <div className="circle1-get">
                <a href={""}>GET IT NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="khung-product" style={{backgroundImage: 'url("//cdn.shopify.com/s/files/1/2159/5497/files/bg-pattern.png?v=1613541007")', backgroundPosition: 'center', backgroundColor: '#FFFFFF'}}>
        <div className="title-seler">
          <div className="title-p">
            <p>Just in now</p>
          </div>
          <div className="title-bestseler">
            <h2>Best Sellers</h2>
          </div>
        </div>
        <div className="product">
          {props?.data?.data?.map((data:any) =>
           <div className="grid-item" key={data._id}>
            <div className="grid-item-img">
              <img src={data.image}  />
            </div>
            <div className="eye">
              <i className="fa-solid fa-eye"/>
            </div>
            <div className="grid-item-name">
              <h3>{data.name}</h3>
              <p>$ {data.price}.00</p>
            </div>
            <div className="grid-item-detail">
              <div className="star">
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                <i className="fa-solid fa-star" style={{color: '#c7c5b9'}} />
              </div>
              <div className="ingredient">
                <p>wheat</p>
                <p>banana</p>
                <p>blueberry</p>
              </div>
            </div>
          </div>)}
        </div>
      </div>
      <div className="NewArrivals">
        <div className="NewArrivals-img">
          <div className="NewArrivals-img-child">
            <img src="./img/banner2.webp"  />
          </div>
          <div className="NewArrivals-title">
            <h1>
              Strawberry
            </h1>
            <h2>
              Crumble
            </h2>
            <h3>
              Mini Pies
            </h3>
          </div>
        </div>
        <div className="NewArrivals-product">
          <div className="NewArrivals-product-title">
            <h1>
              New Arrivals
            </h1>
            <p>Just picked</p>
          </div>
          <div className="NewArrivals-product-child">
            <div className="grid-item1">
              <div className="grid-item-img1">
                <img src="./img/cake3.webp"  />
              </div>
              <div className="eye1">
                <i className="fa-solid fa-eye" />
              </div>
              <div className="grid-item-name1">
                <h3>Coconut Macaroon</h3>
                <p>$300.00</p>
              </div>
              <div className="grid-item-detail1">
                <div className="star1">
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#c7c5b9'}} />
                </div>
                <div className="ingredient1">
                  <p>wheat</p>
                  <p>banana</p>
                  <p>blueberry</p>
                </div>
              </div>
            </div>
            <div className="grid-item1">
              <div className="grid-item-img1">
                <img src="./img/cake3.webp"  />
              </div>
              <div className="eye1">
                <i className="fa-solid fa-eye" />
              </div>
              <div className="grid-item-name1">
                <h3>Coconut Macaroon</h3>
                <p>$300.00</p>
              </div>
              <div className="grid-item-detail1">
                <div className="star1">
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#ffd00a'}} />
                  <i className="fa-solid fa-star" style={{color: '#c7c5b9'}} />
                </div>
                <div className="ingredient1">
                  <p>wheat</p>
                  <p>banana</p>
                  <p>blueberry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home