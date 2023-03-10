import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './MainContainer.css';
import { features } from "../../utils/data";
import { products } from "../../utils/data";
import {MdShoppingBasket} from "react-icons/md";
import Footer from '../Footer/Footer';

function MainContainer() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/shop`; 
    navigate(path);
  }
  return (
    <div>
      <section id="hero">
        <h4>Trade in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & earn upto 70% off !</p>
        <Link><button>Shop Now</button></Link>
    </section>
    <section id="feature" className="section-p1" >
        {features.map((feature) => (
            <div className="fe-box" key={feature.id}>
                <img src={feature.link} alt=""/>
                <h6>{feature.title}</h6>
            </div>
        ))}
    </section>
    <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection, New Trendy Designs </p>
        <div className="pro-container">
            {products.map((product) => (
                <div className="pro" key={product.id} onClick={()=>routeChange()}>
                    <img src={product.img} alt=""/>
                    <div className="des">
                        <span>{product.cover}</span>
                        <h5>{product.title}</h5>
                        <h4>{product.price}</h4>
                    </div>
                    <Link to="/shop"><MdShoppingBasket className='shopping-cart'/></Link>
                </div>
            ))}
        </div>
    </section>
    <section id="banner" className="section-m1">
        <h4>Repair Services Available</h4>
        <h2>Upto <span>70% Off</span> Over a wide range of Clothes and Accessories</h2>
        <button className="normal">Explore More</button>
    </section>
    <section id="sm-banner" className="section-p1">
        <div className="banner-box">
            <h4>Crazy deals</h4>
            <h2>Buy 1 Get 1 for Free</h2>
            <span>The best ethnic wear collection is at Cara</span>
            <button className="white">Explore Deals</button>
        </div>
        <div className="banner-box new-img">
            <h4>Fall Collection</h4>
            <h2>Want to buy clothes for the upcoming season?</h2>
            <span>The best outfits at the best prices at Cara</span>
            <button className="white">Collection</button>
        </div>
    </section>
    <section id="newsletter" className="section-p1">
        <div className="newstext">
            <h4>Sign Up for Newsletters!</h4>
            <p>Get E-Mail updates regarding our <span>special offers</span></p>
        </div>
        <div className="form">
            <input type="email" placeholder="Enter your E-Mail address."/>
            <button className="normal">Sign Up</button>
        </div>
    </section>
    <Footer />
    </div>
  )
}

export default MainContainer