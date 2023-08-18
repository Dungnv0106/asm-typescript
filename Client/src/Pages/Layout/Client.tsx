import React from 'react'
import { Outlet } from "react-router-dom";

const Client = (props: any) => {
  return (
    <div>
  <div className="khung">
    <header>
      <div className="khung-header">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass search_i" />
          <i className="fa-regular fa-user user_i " />
        </div>
        <div className="logo">
          <img src="./img/logo.avif"/>
        </div>
        <div className="heard">
          <i className="fa-regular fa-heart heart_i" />
        </div>
      </div>
    </header>
    <nav>
      <div className="khung-nav">
        <a href={""}>Home</a>
        <a href={""}>About</a>
        <a href={""}>Cookies</a>
        <a href={""}>Contact</a>
        <a href={""}>Location</a>
      </div>
    </nav>
    <section>
        <Outlet />
    </section>
    <footer>
      <div className="image-footer" style={{}}>
      </div>
      <div className="footer-contact">
        <div className="footer-us">
          <div className="footer-frame">
            <div className="footer-us-title">
              <h2>About Us</h2>
            </div>
            <div className="footer-us-content">
              <p>The way the cakes and pastries from 
                <br />
                Cookie Crumbles, melt in your mouth is to be 
                <br />
                experienced to believe. It has a solid 
                <br />
                start and yet that is the way the cookie
                <br />
                crumbles..!</p>
            </div>
          </div>
        </div>
        <div className="footer-Support">
          <div className="footer-Support1">
            <div className="footer-Support1-title">
              <h2>About Us</h2>
            </div>
            <div className="footer-Support1-content">
              <a href={""}>Help</a>
              <a href={""}>Delivery Information</a>
              <a href={""}>Privacy Policy</a>
              <a href={""}>Terms &amp; Conditions</a>
              <a href={""}>Shipping details</a>
            </div>
          </div>
          <div className="footer-Support2">
            <div className="footer-Support1-title">
              <h2>Support</h2>
            </div>
            <div className="footer-Support1-content">
              <a href={""}>Help</a>
              <a href={""}>Delivery Information</a>
              <a href={""}>Privacy Policy</a>
              <a href={""}>Terms &amp; Conditions</a>
              <a href={""}>Shipping details</a>
            </div>
          </div>
          <div className="footer-Support3">
            <div className="footer-Support1-title">
              <h2>Collection</h2>
            </div>
            <div className="footer-Support1-content">
              <a href={""}>Help</a>
              <a href={""}>Delivery Information</a>
              <a href={""}>Privacy Policy</a>
              <a href={""}>Terms &amp; Conditions</a>
              <a href={""}>Shipping details</a>
            </div>
          </div>
        </div>
        <div className="footer-Contactus">
          <div className="footer-frame">
            <div className="footer-us-title">
              <h2>Contact us</h2>
            </div>
            <div className="footer-us-content">
              <p>The way the cakes and pastries from 
                <br />
                Cookie Crumbles, melt in your mouth is to be 
                <br />
                experienced to believe. It has a solid 
                <br />
                start and yet that is the way the cookie
                <br />
                crumbles..!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

  )
}

export default Client